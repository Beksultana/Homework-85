const express = require('express');
const UserSchema = require('../modules/User');
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
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

router.delete('/sessions', async (req, res) => {
    const token = req.get('Authorization');
    const success = {message: 'Logged out'};

    if (!token) {
        return res.send(success);
    }

    const user = UserSchema.findOne({token});
    if (!user) {
        return res.send(success);
    }

    user.generateToken();
    await user.save();
    return res.send(success);
});

router.put('/', auth, async (req, res) => {
    req.user.password = req.body.password;

    await req.user.save();

    res.sendStatus(200);
});

module.exports = router;