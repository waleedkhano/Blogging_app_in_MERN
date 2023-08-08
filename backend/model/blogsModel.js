const mongoose = require('mongoose');

const blogsSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    logo: {
      type: String,
      required: true,
    },
    authorId:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UserModel'
    }
  },
  { timestamps: true }
);



module.exports = mongoose.model('Blog', blogsSchema, 'blogs');
