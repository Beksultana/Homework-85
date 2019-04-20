const express = require('express');
const UserSchema = require('../modules/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {

    const user = new UserSchema(req.body);
        user.save()
        .then(user => res.send({message: "User registered", user}))
        .catch(error => res.status(400).send(error))
});

router.post('/session', async (req, res) => {

    const user = await UserSchema.findOne({username: req.body.username});
    if (!user)  {
        return res.status(400).send({error: 'User not found'});
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if  (!isMatch) {
        return res.status(400).send({error: "Password is wrong"});
    }

    user.generateToken();

    return res.send({message: "Login successful", user});
});

module.exports = router;