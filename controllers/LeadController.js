const Lead = require('../models/Lead');

const createLead = async (req, res) => {
    try {
        const { name, phone, eventDate, eventType } = req.body;

        if(!name || !phone || !eventDate || !eventType){
            return res.status(400).json({ message: "All fields are required" });
        }

        const newLead = new Lead({
            name, phone, eventDate, eventType
        });

        await newLead.save();

        res.status(201).json({ message: "Inquiry sent successfully!", lead: newLead });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getLeads = async (req, res) => {
    try {
        const leads = await Lead.find().sort({ createdAt: -1 });
        res.status(200).json(leads);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { createLead, getLeads };