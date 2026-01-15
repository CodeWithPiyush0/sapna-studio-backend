require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to DB...");

        const existingUser = await User.findOne({ email: "admin@sapnastudio.in" });
        if(existingUser) {
            console.log("Admin already exists!");
            process.exit();
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("admin123", salt);

        await User.create({
            email: "admin@sapnastudio.in",
            password: hashedPassword
        })

        console.log("Admin Account Created Successfully!");
        process.exit();

    } catch (error) {
        console.error("Error", error);
        process.exit(1);
    }
};

createAdmin();