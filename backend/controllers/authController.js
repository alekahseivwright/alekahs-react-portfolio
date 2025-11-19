const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//register new user
exports.register = async (req, res) => {
    try {
        const { username, password } = req.body;

        //check if user exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        //validation
        if (!username || !password) {
            return res.status(400).json({ message: 'Please provide all required fields' });
        }

        //hash password
        const hashedpassword = await bcrypt.hash(password, 10);

        //create user
        const newUser = await User.create({
            username,
            password: hashedpassword,
        });

        res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }       
};

//login user
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;    

        //find user
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        //create token
        const token = jwt.sign(
            { userId: user._id, username: user.username },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
             message: 'Login successful', token })
             
             } catch (error) {
        res.status(500).json({ message: 'Login error' });
    }       
};

