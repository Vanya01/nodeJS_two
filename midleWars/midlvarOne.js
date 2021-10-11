const User = require('../dataBase/User');
const userValidator = require('../validators/validator');

module.exports = {
    createUserMiddleVar: async (req, res, next) => {

        try {

            const userByEmail = await User.findOne({email: req.body.email});

            if (userByEmail) {
                throw new Error('Email already exist');
            }

            next();
        } catch (e) {
            res.json(e.message);
        }
    },

    isUserValid: async (req, res, next) => {
        try {
            const {err, value} = await userValidator.createUserValidator.validate(req.body);
            if (err) {
                throw new Error(err.details[0].message);
            }
            const user = await User.findOne({email: value.email});
            if (user) {
                throw new Error('already exists');
            }
            next();
        } catch (e) {
            res.json(e.message);
        }
    },
};
