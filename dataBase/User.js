const { Schema, model } = require('mongoose');
const userRole = require('../Config/user-role');

const userSchema = new Schema({
    login: {
        type: String,
        required: true,
        trim: true,
        unique:true
    },
    password:{
        type: Number,
        required:true, // must have
        trim:true // delete spaces
    },
    email: {
        type: String,
        unique: true, // special name
        required: true,
        trim: true
    },
    role: {
        type: String,
        default:userRole.USER,
        enum: Object.values(userRole) // allowed just this roles
    }
}, { timestamps: true });

module.exports = model('user', userSchema);
