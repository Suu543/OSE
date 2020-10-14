const slugify = require('slug');
const dotenv = require('dotenv');
const fileType = require('file-type');
const { v4: uuidv4 } = require('uuid');
const AWS = require('aws-sdk');

const { Topic } = require('../models/Topic');
const { Blog } = require('../models/Blog');
const { Reference } = require('../models/Reference');

dotenv.config();

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

exports.createTopic = async (req, res) => {
  const { name, description, image } = req.body;

  if (!name || name.length < 1)
    return res.json({ error: 'name is not defined...' });

  if (!description || description.length < 0)
    return res.json({ error: 'description is not defined...' });

  if (!image || image.length < 1)
    return res.json({ error: 'image is not defined...' });

  const base64Data = new Buffer.from(
    image.replace(/^data:image\/\w+;base64,/, ''),
    'base64'
  );

  const slug = slugify(name).toLowerCase();
  const type = image.split(';')[0].split('/')[1];
  const params = {
    Bucket: 'ose',
    Key: `image/${uuidv4()}.${type}`,
    Body: base64Data,
    ACL: 'public-read',
    ContentEncoding: 'base64',
    ContentType: `image/${type}`,
  };

  s3.upload(params, async (err, data) => {
    const newTopic = new Topic({
      name: name.trim(),
      slug,
      description,
    });

    if (err) res.status(400).json({ error: 'Upload to S3 Failed...' });
    console.log('AWS UPOLOAD RES DATA', data);

    newTopic.image.url = data.Location;
    newTopic.image.key = data.key;

    try {
      await newTopic.save();
      return res.status(201).json({
        message: `${name} topic is successfully created...`,
      });
    } catch (error) {
      return res.status(409).json({
        error: `Failed to create ${name} topic...`,
      });
    }
  });
};

exports.readTopic = async (req, res) => {
  const { slug } = req.params;

  try {
    const singleTopic = await Topic.findOne({ slug });
    if (!singleTopic) {
      return res.status(404).json({
        error: `${slug} topic not found...`,
      });
    }

    return res.status(200).json(singleTopic);
  } catch (error) {
    return res.status(404).json({
      error: `${slug} topic not found...`,
    });
  }
};

exports.removeTopic = async (req, res) => {
  const { slug } = req.params;

  try {
    const removedTopic = await Topic.findOneAndRemove({ slug });
    if (!removedTopic) {
      return res.status(404).json({
        error: `${slug} topic not found...`,
      });
    }

    return res.status(200).json({
      message: `${slug} is successfully deleted...`,
    });
  } catch (error) {
    return res.status(404).json({
      error: `Failed to delete ${slug} topic...`,
    });
  }
};

exports.readAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find({});
    if (topics) {
      res.status(200).json(topics);
    }
  } catch (error) {
    return res.status(400).json({
      error: 'Failed to load topics...',
    });
  }
};
