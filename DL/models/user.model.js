const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        Fname: {
            type: String,
            required: true
        },

        Fname: {
            type: String,
            required: true
        },

        email: {
            type: String
        },
        password: {
            type: String,
        },
        CreatedAt: {
            type: String,
            default: Date.now
        },
        UpdateAt: {
            type: String,
            default: Date.now
        },
        isActive: {
            type: Boolean,
            default: true
        }
    })

const userModel = mongoose.model('users', schema)
module.exports = userModel
