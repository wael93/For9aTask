const router = require('express').Router();
const verified = require('../routes/verifyToken');
const User = require('../model/User');

router.get('/', verified, (req, res) => {
    res.send("dashboard ;)");
});


router.get('/user', verified, async (req, res) => {
    res.send(await User.findOne({_id: req.user._id}));
});




module.exports = router; 