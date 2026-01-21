const Photo = require('../models/Photo');

const uploadPhoto = async(req, res) => {
    try {
        if(!req.file){
            return res.status(400).json({ message: "No image file provided" });
        }

        const { title, category } = req.body;

        const newPhoto = new Photo({
            title: title || "Untitled",
            category: category || "Uncategorized",
            imageUrl: req.file.path,
            publicId: req.file.filename
        });

        await newPhoto.save();

        res.status(201).json({
            message: "Photo uploaded successfully!",
            photo: newPhoto
        });

    } catch (error) {
        console.error("Upload Error:", error);
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const getPhoto = async(req, res) => {
    try {
        const photos = await Photo.find().sort({ createdAt: -1 });
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

const deletePhoto = async(req, res) => {
    try {
        const photo = await Photo.findById(req.params.id);

        if(!photo) {
            return res.status(404).json({ message: "Photo not found" });
        }

        await photo.deletePhoto();
        res.status(200).json({ message: "Photo deleted" });

    } catch (error) {
        res.status(500).json({ message: "Server Error", error: error.message });
    }
};

module.exports = { uploadPhoto, getPhoto, deletePhoto };