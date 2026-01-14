const mongoose = require('mongoose');

const LeadSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
    eventType: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'New'
    },
}, { timestamps: true });

module.exports = mongoose.model('Lead', LeadSchema);