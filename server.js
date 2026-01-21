require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const leadRoutes = require('./routes/leadRoutes');
const authRoutes = require('./routes/authRoutes');
const galleryRoutes = require('./routes/galleryRoutes');

const app = express()

// Middleware
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Bhai MongoDB successfully connect ho gya"))
    .catch((err) => console.error("MongoDB connection me error hai:", err));

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/gallery', galleryRoutes);

// Test route 
app.get('/', (req, res) => {
    res.send('Spana studio API is running!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});