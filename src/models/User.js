const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trime: true, // clean the username extra spaces
        unique: true // not repeated data
    },
    password: String,
    role: String,
    name: String,
    surname: String
}, {
    timestamps: true
});

module.exports = model('User', userSchema);