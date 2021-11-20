// Importing Section
const express = require('express');
const User = require('../Models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Creating a user : POST "/api/auth/createuser" No login required

router.post('/createuser', [
    // Validation

    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('userName', 'Enter username with minimum length of 5').isLength({ min: 5 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter password with minimum length of 5').isLength({ min: 5 })

], async (req, res) => {

    // If there are errors, return Bad request and the errors

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Check whether the user with this email already exists

    try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ errors: "Sorry this user already exists!" });
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        // Create a new user
        user = await User.create({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password: secPass
        });

        const JWT_SECRET = "secrect$code";

        const data = {
            user: {
                id: user.id
            }
        };

        const authToken = jwt.sign(data, JWT_SECRET);

        res.json({authToken});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured!");
    }
});


// Authenticate user : POST "/api/auth/login" No login required

router.post('/login', [
    // Validation
    
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password cannot be blank').exists(),
    
], async (req, res) => {

    // If there are errors, return Bad request and the errors
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    try {
        
    } catch (error) {
        
    }

})

module.exports = router;