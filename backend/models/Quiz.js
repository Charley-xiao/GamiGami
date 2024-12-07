// backend/models/Quiz.js
const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [
    {
      question: String,
      options: [String],
      answer: String, // Correct answer
    },
  ],
});

module.exports = mongoose.model('Quiz', QuizSchema);
