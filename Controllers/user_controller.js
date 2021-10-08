const User = require('../dataBase/User');
const user = require("../dataBase/User");

module.exports = {
    getUsers: async (req, res) => {

        try {
            const users = await User.find();

            res.json(users);
        } catch (e) {
            res.json(e.message);
        }
    },

    getUsersById: async (req, res) => {

        try {
            const {user_id} = req.params;
            const user = await User.findById(user_id);

            res.json(user);
        } catch (e) {
            res.json(e.message);
        }
    },

    createUser: async (req, res) => {

        try {
            const newUser = await User.create(req.body);

            res.json(newUser);
        } catch (e) {
            res.json(e.message);
        }
    },

    deleteUser: async (req, res) => {
        try {
            const {user_id} = req.params;
            const deletedUser = await User.findOneAndDelete(user_id);
            res.json(deletedUser);
        } catch (e) {
            res.json(e.message);
        }
    },
    login: async (req, res) => {
        try {
            const checkEmail = await user.findOne({login: req.body.login, password: req.body.password});

            if (!checkEmail) {
                throw Error('Email or password incorrect');
            }
            res.json('Congratulations!');
        } catch (e) {
            res.json(e.message);
        }
    }
};
