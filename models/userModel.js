const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    username: { type: String, require: true, min: 5, max: 20, unique: [true, 'User already exists'] },
    email: { type: String, require: true, unique: [true, 'User already exists'] },
    password: { type: String, require: true, min: 7 }
})

module.exports = mongoose.model('User', userSchema)