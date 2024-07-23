const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
    name:{type:String,trim:true,required:true},
    email:{type:String,trime:true,lowercase:true,unique:true,required},
    age:{type:Number,required:true,validate:{validator(age){
        if(age<0)
        {
            throw new Error("Age mus t be +ve")
        }
    }}},
    password:{type:String,required:true,trim:true,minlength:8}

},{timestamps:true});
const user = mongoose.model("User",UserSchema)
module.exports=user;