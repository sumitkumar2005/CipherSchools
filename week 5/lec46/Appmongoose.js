// Appmongoose.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cs-mern', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

const schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    isCompleted: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Task = mongoose.model('Task', schema);

module.exports = Task;
