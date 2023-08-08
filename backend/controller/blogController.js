const BlogsModel = require('../model/blogsModel');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const catchAsyncError = require("../middleware/catchAsyncError");
const getDataUri = require('../utils/dataUri');

const allBlogs =catchAsyncError( async (req, res) => {
    const blogs = await BlogsModel.find({}).sort({ createdAt: -1 });
    res.status(200).json(blogs);
  
});

// Get a single blog
const singleBlog = catchAsyncError( async (req, res, next) => {
  const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return next(new Error("invalid", 404));
    }

    const blog = await BlogsModel.findById(id);

    res.status(200).json(blog);
 
});

// Post a new blog

const postNewBlog = catchAsyncError( async (req, res, next) => {
    const { title, content } = req.body;
    const file = req.file;
    
      if (!title || !content || !file) {
        return next(new Error("Please add all fields", 400));
      }
      
      const fileUri = getDataUri(file)
      
      const LogoUrl = await cloudinary.v2.uploader.upload(fileUri.content);
      const logoUrl = LogoUrl.secure_url;

      const authorId = req.user._id;
      
      await BlogsModel.create({ title, content, logo:logoUrl, authorId });
      console.log(authorId)
      res.status(201).json({
        success: true,
        message: "Blog has been posted Successfully.",
      });    
  });
  
// Delete a blog
const deleteBlog = catchAsyncError( async (req, res, next) => {
  const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "The ID is invalid" });
    }

    const deletedBlog = await BlogsModel.findOneAndDelete({ _id: id });

    if (!deletedBlog) {
      return res.status(404).json({ error: "No such blog found" });
    }

    res.status(200).json(deletedBlog);
});


module.exports = {
  allBlogs,
  singleBlog,
  postNewBlog,
  deleteBlog,
};
