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
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
    authorId: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);



module.exports = mongoose.model('Blog', blogsSchema, 'blogs');
