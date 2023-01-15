const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
    const { name, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const tempUser = {
        name,
        email,
        password: hashedPassword
    };

    try {
        const user = await User.create({ ...tempUser });
        res.status(StatusCodes.CREATED).json({ user });
    } catch (error) {
        res.json({ error: error});
    }
};

const login = async (req, res) => {
    res.send('Login');
};

module.exports = { register, login }