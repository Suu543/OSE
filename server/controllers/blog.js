const AWS = require("aws-sdk");
const dotenv = require("dotenv");
const fileType = require("file-type");
const { v4: uuidv4 } = require("uuid");
const formidable = require("formidable");
const slugify = require("slug");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");
dotenv.config();

const { smartTrim } = require("../helpers/smartTrim");
const { Work } = require("../models/Blog");
const { Tag } = require("../models/Tag");
const { Topic } = require("../models/Topic");
const { Reference } = require("../models/Reference");
const Blog = require("../models/Blog");
const { worker } = require("cluster");

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.readAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    return res.status(200).json(allBlogs);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.createBlog = async (req, res) => {
  // 태그 입력 방식 때문에 요청을 모아서 한 번에 처리
  const saveMultiTags = async (tags) => {
    const jobQuerys = [];
    const arrTagId = [];
    const splitedTags = tags.split(",");
    const allTags = await Tag.find({});

    // 요청으로 들어온 태그 중 이미 생성된 태그와 그렇지 않을 태그를 구분 arrTagId에 이미 생성된 태그를 담고, splitedTags 에서 이미 생성된 태그를 제거
    allTags.forEach((tagFromDB) => {
      if (splitedTags.find((tag) => tagFromDB.title == tag)) {
        arrTagId.push(tagFromDB._id);
        let idx = splitedTags.indexOf(tagFromDB.title);
        splitedTags.splice(idx, 1);
      }
    });

    // 위 로직에서 이미 생성된 태그는 splitedTags 배열에서 다 제거 되었기 때문에 splitedTags 배열에 있는 태그를 생성하도록 job Query에 요청 할당
    splitedTags.forEach((title) => {
      const newTag = new Tag({ title });
      jobQuerys.push(newTag.save());
    });

    // jobQuerys 배열에 담은 비동기 요청을 한 번에 처리
    const tagResult = await Promise.all(jobQuerys);

    // 새로 생성된 태그를 arrTagId에 담아 모든 생성된 태그를 확인차 리턴
    tagResult.forEach((tag) => {
      arrTagId.push(tag._id);
    });

    return arrTagId;
  };

  const saveMultiReferences = (references) => {
    const results = [];

    references.forEach((ref) => {
      if (ref.url.length > 0 && ref.key.length > 0) {
        results.push(ref);
      }
    });

    return results;
  };

  const uniqueRefs = (arr) => {
    const filteredArr = arr.reduce((acc, current) => {
      const dup_checker = acc.find((item) => item.url == current.url);
      if (dup_checker) {
        return acc.concat([current]);
      } else {
        return acc;
      }
    }, []);

    return filteredArr;
  };

  try {
    let blog = new Blog();
    let form = new formidable.IncomingForm();
    form.encoding = "utf-8";
    form.multiples = true;
    form.keepExtensions = true;

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(400).json({ error: err });
      }

      const {
        title,
        excerpt,
        body,
        topics,
        categories,
        mime,
        thumbnail,
        references,
      } = fields;

      if (!title || title.length < 2) {
        return res.json({
          error: "Please Enter At Least One Characters...",
        });
      }

      if (!excerpt || excerpt < 10) {
        return res.json({
          error: "Please Enter At Least Ten Characters...",
        });
      }

      if (!body || body.length < 1) {
        console.log("body error");
        return res.json({
          error: "Please Enter At Least One Character...",
        });
      }

      if (!topics || topics.length === 0) {
        return res.json({
          error: "Please Pick At Least One Topic...",
        });
      }

      if (!tags || tags.length === 0) {
        return res.json({
          error: "Please Pick At Least One Tag...",
        });
      }

      if (!thumbnail || thumbnail.length < 1) {
        return res.json({
          error: "Please Select Main Thumbnail For this Work...",
        });
      }

      let imageData = thumbnail;
      if (thumbnail.substr(0, 7) === "base64,") {
        imageData = thumbnail.substr(7, thumbnail.length);
      }

      const buffer = Buffer.from(imageData, "base64");
      const fileInfo = await fileType.fromBuffer(buffer);
      const detectedExt = fileInfo.ext;
      const detectedMime = fileInfo.mime;

      if (detectedMime !== mime)
        return res.json({
          message: "mime types don't match`",
        });

      const keyName = uuidv4();
      const key = `ose/${keyName}.${detectedExt}`;

      const params = {
        Bucket: "ose",
        Key: key,
        Body: buffer,
        ACL: "public-read",
        ContentEncoding: "base64",
        ContentType: mime,
      };

      const blogTags = await saveMultiTags(tags);
      const blogRefs = saveMultiReferences(uniqueRefs(JSON.parse(references)));

      s3.putObject(params, async (err, data) => {
        if (err) {
          return res.status(400).json({ error: "Upload to S3 Failed..." });
        }

        const url = `https://ose.s3-${process.env.AWS_REGION}.amazonaws.com/${key}`;

        blog.thumbnail.url = url;
        blog.thumbnail.key = key;

        blog.title = title;
        blog.slug = slugify(title).toLowerCase();
        blog.body = body;
        blog.excerpt = excerpt;
        blog.topics = topics && topics.split(",");
        blog.tags = tags && blogTags;
        blog.references = blogRefs;

        try {
          const newBlog = await blog.save();
          return res.status(200).json(newBlog);
        } catch (error) {
          return res.status(400).json({ error });
        }
      });
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message || "Failed to upload image...",
    });
  }
};

exports.readBlog = async (req, res) => {
  const slug = req.params.slug;

  try {
    let blog = await Blog.findOne({ slug });
    return res.status(200).json(blog);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

exports.uploadS3 = multer({
  storage: multerS3({
    acl: "public-read",
    s3: s3,
    bucket: "ose",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const keyName = uuidv4();
      const extension = path.extname(file.originalname);
      cb(null, `blogs/images/${keyName}${extension}`);
    },
  }),
});

exports.upload = async (req, res) => {
  const ref = new Reference();
  console.log("req.file.key", req.file);
  ref.url = req.file.location;
  ref.key = req.file.key;
  const result = await ref.save();
  return res.json({
    location: req.file.location,
    key: req.file.key,
    id: result._id,
  });
};

exports.removeBlog = async (req, res) => {
  const slug = req.params.slug;

  const deleteThumbnail = async (key) => {
    const deletedParams = {
      Bucket: "ose",
      Key: `${key}`,
    };

    s3.deleteObject(deletedParams, (err, data) => {
      if (err) console.log("S3 DELETE ERROR DURING...", err);
      else console.log("S3 DELETED DURING", data);
    });
  };

  try {
    let removedBlog = await Blog.findOneAndRemove({ slug });
    let removedReferences = removedBlog["references"];
    let removedThumbnail = removedBlog["thumbnail"]["key"];

    await deleteThumbnail(removedThumbnail);

    removedReferences.map(async (ref) => {
      let deletedRef = await Reference.findByIdAndDelete({ _id: ref });

      if (deletedRef) {
        const deletedParams = {
          Bucket: "ose",
          Key: `${deletedRef["key"]}`,
        };

        s3.deleteObject(deletedParams, (err, data) => {
          if (err) console.log("S3 DELETE ERROR DURING", err);
          else console.log("S3 DELETED DURING", data);
        });
      }
    });

    return res.status(200).json(removedBlog);
  } catch (error) {
    return res.status(400).json({ error });
  }
};
