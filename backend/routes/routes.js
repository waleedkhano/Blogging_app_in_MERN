const express = require('express');
const user = require('../controller/userController');
const blogs = require('../controller/blogController');
const singleUpload = require("../middleware/multer");
const router = express.Router();

// Routes for users authentication
router.post('/user/register', user.register);
router.post('/user/signin', user.signin);
router.post('/user/logout', user.logOut);

// Routes for blogs
router.get('/blogs/', blogs.allBlogs);
router.get('/blogs/:id', blogs.singleBlog);

// Protected route: This will allow only logged-in users to post a new blog
router.post('/blogs/', singleUpload, blogs.postNewBlog);

router.delete('/blogs/:id', blogs.deleteBlog);

module.exports = router;
