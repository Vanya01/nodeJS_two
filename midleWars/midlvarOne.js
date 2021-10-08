const user = require('../dataBase/User');

module.exports = {
    createUserMiddleVar: async (req, res, next) => {

        try {
            const userByEmail = await user.findOne({email: req.body.email});

            if (userByEmail) {
                throw new Error('Email already exist');
            }
            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    checkLogin: async (req, res, next) => {

        try {
            const userLogin = await user.findOne({login: req.body.login});

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
            const uniqueId = await user.findOne({id: req.body.id});

            if (uniqueId) {
                throw new Error('This id exist');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

};
