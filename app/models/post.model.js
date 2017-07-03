const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

// Define a new 'PostSchema'
const PostSchema = new Schema({
	picUrl: {
    type: String,
    required: true
  },
  picDescription: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  userPic: {
    type: String,
    required: true
  },
  favorites: {
    type: Number,
    default: 0
  }
});

// Create the 'Post' model out of the 'PostSchema'
mongoose.model('Post', PostSchema);
