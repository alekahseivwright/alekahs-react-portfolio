const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
    institution: { 
        type: String, 
        required: true 
    },

    program: {
         type: String,
         required: true 
    },

    graduationYear: { 
        type: Number, 
        required: true 
    },

    notes: {
         type: String 
        },
        
}, { timestamps: true });