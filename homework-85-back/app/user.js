const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const UserSchema = require('../modules/User');

router.post('/', async (req, res) => {
    const user = new UserSchema(req.body);

    user.generateToken();

    try {
        await user.save();
        return res.send({token: user.token})
    } catch (error) {
        return res.status(400).send(error)
    }
});

router.post('/sessions', async (req, res) => {
    const user = await UserSchema.findOne({username: req.body.username});

    if (!user) {
        return res.status(400).send({error: "Username/password incorrect!" })
    }

    const isMatch = await user.checkPassword(req.body.password);

    if (!isMatch){
        return res.status(400).send({error: "Username/password incorrect!" })
    }
    user.generateToken();
    await user.save();
    res.send({token: user.token})

});

router.get('/secret', auth,(req, res) => {
    console.log(req.user._id);
    res.send({message: "OK"});
});

module.exports = router;