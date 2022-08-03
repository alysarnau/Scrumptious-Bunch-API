// import dependencies
const mongoose = require('mongoose')

const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        default: ''
    },
    type: {
        type: String,
        required: true,
        default: ''
    },
    owner: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rate: {
        type: Number,
        required: true,
        default: ''
    },
}, {
    timestamps: true
})

module.exports = serviceSchema