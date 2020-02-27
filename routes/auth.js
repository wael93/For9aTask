const router = require('express').Router();
const User = require('../model/User');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {registerValidation, loginValidation} = require('../Validation')


router.post('/register', async (req, res) => {
    console.log(req.body);

    //validation
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //check user already exist
    const emailExist = await User.findOne({email: req.body.email});
   
    if (emailExist) return res.status(400).send("Email already in db");

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    //create user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword,
        img:req.body.img
        
    });

    try {
        const savedUser = await user.save();
        res.send({user: user._id});
    } catch(err) {
        res.status(400);
        res.send(err);
    }
});

//login
router.post('/login', async (req, res) => {
    console.log('Login route');

    //validation
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = await User.findOne({email: req.body.email});

    //check user exist
    if (!user) return res.status(400).send("Email or password is wrong");

    //password
    const validPass = await bcryptjs.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send("Email or password is wrong");

    //JWT
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

});

module.exports = router;