const Tag = require("../models/Tag");
const slugify = require("slugify");

exports.createTag = async (req, res) => {
  const { name } = req.body;
  const slug = slugify(name).toLowerCase();
  const tag = new Tag({ name, slug });

  try {
    await tag.save();
    return res.status(201).json({
      message: `${name} tag is successfully created...`,
    });
  } catch (error) {
    return res.status(409).json({
      error: `Failed to create ${name} tag...`,
    });
  }
};

exports.removeTag = async (req, res) => {
  const { slug } = req.params;

  try {
    let removedTag = await Tag.findOneAndRemove({ slug });
    if (removedTag) {
      return res.status(200).json({
        message: `${slug} is successfully deleted...`,
      });
    }

    return res.status(404).json({
      error: `${slug} tag not exist...`,
    });
  } catch (error) {
    return res.status(404).json({
      error: `Failed to delete ${slug} tag...`,
    });
  }
};

exports.readAllTags = async (req, res) => {
  try {
    const tags = await Tag.find({});
    if (tags) {
      res.status(200).json(tags);
    }
  } catch (error) {
    return res.status(400).json({
      error: "Failed to load tags...",
    });
  }
};
