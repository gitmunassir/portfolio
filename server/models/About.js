// About Model - Portfolio about section content
const mongoose = require('mongoose');

const aboutSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'About Me'
  },
  summary: {
    type: String,
    required: true
  },
  profileImage: {
    type: String
  },
  resume: {
    type: String // URL to resume
  },
  available: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('About', aboutSchema);
