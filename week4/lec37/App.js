// app.js
const express = require('express');
const Task = require('./Appmongoose'); // Import the Mongoose configuration

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/add-task", async (req, res) => {
  try {
    const task = new Task({
      title: req.body.title,
      description: req.body.description
    });
    await task.save();
    res.send("Task saved successfully");
  } catch (error) {
    res.status(500).send("Error saving task: " + error.message);
  }
});
app.get("/get-task",async(req,res)=>{
    const taskList = await Task.find();
    console.log(taskList.title)
    res.send({taskList.title})
    
})
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
