const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');

const register = async (req, res) => {
    try {
        const user = await User.create({ ...req.body });

        res.status(StatusCodes.CREATED).json({ 
            user: { name: user.getName() }, 
            token: user.generateJWTToken() 
        });
    } catch (error) {
        res.json({ error: error});
    }
};

const login = async (req, res) => {
    res.send('Login');
};

module.exports = { register, login }