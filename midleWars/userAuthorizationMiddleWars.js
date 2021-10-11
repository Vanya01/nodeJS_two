const User = require('../dataBase/User');
const pass = require('../services/password-services');
const {login} = require("../Controllers/userLogIn");

module.exports = {
    checkUserPassword: async (req, res, next) => {

        try {
            const {email, password} = req.body;
            const userPassword = await User.findOne({email})
                .lean()
                .select('+password');
            await pass.compare(password, login.password);

            if (!userPassword) {
                throw new Error('Password incorrect');
            }

            next();
        } catch (e) {
            res.json(e);
        }
    },

    checkLogin: async (req, res, next) => {

        try {
            const userLogin = await User.findOne({login: req.body.login});

            if (userLogin) {
                throw new Error('Login incorrect');
            }
            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkUserId: async (req, res, next) => {
        try {

            const uniqueId = await User.findOne({id: req.body.id});

            if (uniqueId) {
                throw new Error('This id exist');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    }
};
