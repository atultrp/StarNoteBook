const express = require('express');
const User = require('../Models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');


// Creating a user : POST "/api/auth/"

router.post('/', [
    body('name', 'Enter a valid name').isLength({ min: 2 }),
    body('userName', 'Enter username with minimum length of 4').isLength({ min: 4 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter password with minimum length of 5').isLength({ min: 5 })
], (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user));

});

module.exports = router;