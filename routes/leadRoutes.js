const express = require('express');
const router = express.Router();
const { createLead, getLeads } = require('../controllers/LeadController');

//POST /api/leads -> Create new inquiry
router.post('/', createLead);

//GET /api/leads -> Get all inquiries
router.get('/', getLeads);

module.exports = router;