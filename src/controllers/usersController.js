const userCtrl = {};

const User = require('../models/User');
const bcrypt = require('bcrypt');
// GET
userCtrl.getUsers = async (req, res) => {
    const users = await User.find();
    res.send(users);
};

// POST
userCtrl.createUser = async (req, res) => {
    var { username, password, role, name, surname } = req.body;
    password = bcrypt.hashSync(password, 9);
    const newUser = new User({ 
        username, 
        password, 
        role, 
        name, 
        surname 
    });
    await newUser.save();
    res.json({message: 'User saved'});
};

// DELETE
userCtrl.deleteUser = async (req, res) => {
    await User.findOneAndDelete({_id: req.params.id});
    res.json({message: 'User deleted'});
};

module.exports = userCtrl;