const Category = require("../models/Category");
const slugify = require("slugify");

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const slug = slugify(name).toLowerCase();
  const category = new Category({ name, slug });

  try {
    await category.save();
    return res.status(201).json({
      message: `${name} category is successfully created...`,
    });
  } catch (error) {
    return res.status(409).json({
      error: `Failed to create ${name} category...`,
    });
  }
};

exports.removeCategory = async (req, res) => {
  const { slug } = req.params;

  try {
    let removedCategory = await Category.findOneAndRemove({ slug });
    if (removedCategory) {
      return res.status(200).json({
        message: `${slug} is successfully deleted...`,
      });
    }

    return res.status(404).json({
      error: `${slug} category not exist...`,
    });
  } catch (error) {
    return res.status(404).json({
      error: `Failed to delete ${slug} category...`,
    });
  }
};

exports.readAllCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    if (categories) {
      res.status(200).json(categories);
    }
  } catch (error) {
    return res.status(400).json({
      error: "Failed to load categories...",
    });
  }
};
