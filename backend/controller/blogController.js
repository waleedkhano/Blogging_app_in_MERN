const BlogsModel = require('../model/blogsModel');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary');
const catchAsyncError = require("../middleware/catchAsyncError");
const getDataUri = require('../utils/dataUri');
const jwt = require("jsonwebtoken");

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
      
      const mycloud = await cloudinary.v2.uploader.upload(fileUri.content);
      // const logoUrl = LogoUrl.secure_url;


      //Getting the user id through decoding the cookie token
      const token = req.cookies.token;
      if (!token) {
              return res.status(401).json({ message: 'No token provided' });
            }
      
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      const userId = decodedToken._id

      await BlogsModel.create({ 
        title, 
        content, 
        logo:{
          public_id: mycloud.public_id,
          url :mycloud.secure_url,
        },
        authorId:userId 
      });

      res.status(201).json({
        success: true,
        message: "Blog has been posted Successfully.",
      });    
  });
  
  // myblogs
const myBlogs = catchAsyncError( async ( req, res, next) => {
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({message: "No token available"});
  }
  const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
  const authorId = decodedToken._id;
  const myblogs = await BlogsModel.find({ authorId }).sort({ createdAt: -1 });
  res.status(200).json(myblogs);
});

// Delete a blog
const deleteBlog = catchAsyncError( async (req, res, next) => {
  const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "The ID is invalid" });
    }

    const deleteBlog = await BlogsModel.findById(id);
    if (!deleteBlog) return next(new ErrorHandler("Blog not found", 404));

    await cloudinary.v2.uploader.destroy(deleteBlog.logo.public_id);

    await BlogsModel.deleteOne({ _id: id });

    res.status(200).json({
      success: true,
      message: "Blog Deleted Successfully",
    });

});



module.exports = {
  allBlogs,
  singleBlog,
  postNewBlog,
  deleteBlog,
  myBlogs
};
