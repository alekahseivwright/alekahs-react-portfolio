require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User"); 
const bcrypt = require("bcryptjs");

async function createAdmin() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected:", mongoose.connection.host);

        const existingAdmin = await User.findOne({ username: "admin" });

        if (existingAdmin) {
            console.log("Admin already exists.");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash("t1M34w04k!", 10);

        const admin = new User({
            username: "admin",
            password: hashedPassword,
            role: "admin"
        });

        await admin.save();
        console.log("Admin user created successfully!");
        process.exit(0);

    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

createAdmin();
