const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../config/cloudinary');
const { uploadPhoto, getPhoto, deletePhoto } = require('../controllers/galleryController');

const upload = multer({ storage });

router.get('/', getPhoto);

router.post('/upload', upload.single('image'), uploadPhoto);

router.delete('/:id', deletePhoto);

module.exports = router;