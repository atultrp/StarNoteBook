const express = require('express');
const User = require('../Models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


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

        user = await User.create({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password
        });

        res.json(user);
    }
    catch(error){
        console.error(error.message);
        res.status(500).send("Some error occured!");
    }
});

module.exports = router;