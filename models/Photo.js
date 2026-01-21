const mongoose = require('mongoose');

const PhotoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    publicId: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Photo', PhotoSchema)