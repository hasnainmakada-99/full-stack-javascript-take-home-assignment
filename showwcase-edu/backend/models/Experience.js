const mongoose = require('mongoose');

const ExperienceSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  schoolName: { type: String, required: true },
  degree: String,
  fieldOfStudy: String,
  startYear: Number,
  endYear: Number,
  grade: String,
  description: String,
});

module.exports = mongoose.model('Experience', ExperienceSchema);
