const mongoose = require('mongoose')

const schema = new mongoose.Schema(
    {
        campaigns: [{
            type: mongoose.SchemaTypes.ObjectId, ref: 'campaigns'
        }],

        Fname: {
            type: String,
            required: true
        },

        Lname: {
            type: String,
            required: true
        },

        email: {
            type: String,
        },

        phone: {
            type: String,
            required: true
        },

        notes: {
            type: String,
        },

        isActive: {
            type: Boolean, default: true
        }

    })

const leadModel = mongoose.model('leads', schema)
module.exports = leadModel

