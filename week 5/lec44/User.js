const mongoose = require('mongoose');
const validator = require('validator');
const {encryptPassword,comparePassword}=require("./bcrypt")
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: {
            validator: validator.isEmail,
            message: 'Invalid email format'
        }
    },
    age: {
        type: Number,
        required: true,
        validate: {
            validator: function (age) {
                return age > 0;
            },
            message: 'Age must be positive'
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate: {
            validator: function (password) {
                return !password.includes(' ') && !password.includes('\n') && !password.includes('\t');
            },
            message: 'Password should not contain spaces, new lines, or tabs'
        }
    }
}, { timestamps: true });

UserSchema.statics.findByEmailAndPasswordAuth = async (email, password) => {
    try {
        const user = await User.findOne({ email });
        if (!user) {
            console.log('User not found');
            return null;
        }
        const isMatch=await comparePassword(password,user.password)
        if (!isMatch) {
            console.log('Password is incorrect');
            return null;
        }
        console.log('Login successful');
        return user;
    } catch (err) {
        console.error(err);
        throw new Error('Error during authentication');
    }
};
UserSchema.pre("save",async function(next)
{
    const user = this;
    if(user.modifiedPaths().includes("password"))
    {
        user.password=await encryptPassword(user.password)
    }
    next();
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
