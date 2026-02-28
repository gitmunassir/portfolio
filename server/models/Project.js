// Project Model - Portfolio projects
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  shortDescription: {
    type: String,
    maxlength: 150
  },
  techStack: [{
    type: String,
    trim: true
  }],
  githubLink: {
    type: String,
    trim: true
  },
  liveDemoLink: {
    type: String,
    trim: true
  },
  images: [{
    type: String
  }],
  featured: {
    type: Boolean,
    default: false
  },
  order: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
