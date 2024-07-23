const mongoose = require('mongoose');
const validator = require('validator');
const { encryptPassword, comparePassword } = require('./bcrypt');
const { generateToken } = require('./jwt');

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
            validator: age => age > 0,
            message: 'Age must be positive'
        }
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8,
        validate: {
            validator: password => !/\s/.test(password),
            message: 'Password should not contain spaces, new lines, or tabs'
        }
    }
}, { timestamps: true });

UserSchema.methods.generateToken = function() {
    const user = this;
    return generateToken({ _id: user._id });
};

UserSchema.statics.findByEmailAndPasswordAuth = async (email, password) => {
    const user = await User.findOne({ email });
    if (!user) {
        console.log('User not found');
        return null;
    }
    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        console.log('Password is incorrect');
        return null;
    }
    console.log('Login successful');
    return user;
};

UserSchema.pre('save', async function(next) {
    const user = this;
    if (user.isModified('password')) {
        user.password = await encryptPassword(user.password);
    }
    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
