const { name } = require('ejs');
const { type } = require('express/lib/response');
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');

const connect = mongoose.connect('mongodb://localhost:27017/cs-mern')
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

  const schema  = new mongoose.Schema(
    {
  title:{type:String,required:true},
  description:{type:StaticRange,required:true},
    isCompleted:{type:Boolean,default:true},
        
  },
{timestamps:true}
)
const model= new mongoose.model("Task",schema);
module.exports=model();