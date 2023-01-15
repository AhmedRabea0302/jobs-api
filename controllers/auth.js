
const register = async (req, res) => {
    res.send('HEllo Reg');
};

const login = async (req, res) => {
    res.send('Login');
};

module.exports = { register, login}