const express = require('express');
const UserSchema = require('../modules/User');
const bcrypt = require('bcrypt');

const router = express.Router();

router.post('/', async (req, res) => {
    const user = await new UserSchema(req.body);
    user.generateToken();

    try {
        await user.save();
        res.send({message: "User register" , user});
    }catch (error) {
        res.status(400).send(error)
    }
});

router.post('/sessions', async (req, res) => {

    const user = await UserSchema.findOne({username: req.body.username});
    if (!user)  {
        return res.status(400).send({error: 'User not found'});
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if  (!isMatch) {
        return res.status(400).send({error: "Password is wrong"});
    }

    user.generateToken();
    await user.save();

    return res.send({message: "Login success", user});
});

module.exports = router;