const Topic = require("../models/Topic");
const slugify = require("slugify");

exports.createTopic = async (req, res) => {
  const { name } = req.body;
  const slug = slugify(name).toLowerCase();
  const topic = new Topic({ name, slug });

  try {
    await topic.save();
    return res.status(201).json({
      message: `${name} topic is successfully created...`,
    });
  } catch (error) {
    return res.status(409).json({
      error: `Failed to create ${name} topic...`,
    });
  }
};

exports.removeTopic = async (req, res) => {
  const { slug } = req.params;

  try {
    let removedTopic = await Topic.findOneAndRemove({ slug });
    if (removedTopic) {
      return res.status(200).json({
        message: `${slug} is successfully deleted...`,
      });
    }

    return res.status(404).json({
      error: `${slug} topic not exist...`,
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
      error: "Failed to load topics...",
    });
  }
};
