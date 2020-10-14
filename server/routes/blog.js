const express = require('express');

const router = express.Router();

const { auth } = require('../middleware/auth');
const {
  readAllBlogs,
  createBlog,
  readBlog,
  uploadS3,
  upload,
  removeBlog,
  findByTopic,
} = require('../controllers/blog');

router.get('/blogs', readAllBlogs);
router.get('/blog/:slug', readBlog);
router.get('/blogs/:topic', findByTopic);
router.post('/blog', auth, createBlog);
router.post('/blog/upload', uploadS3.single('image'), upload);
router.delete('/blog/:slug', auth, removeBlog);

module.exports = router;
