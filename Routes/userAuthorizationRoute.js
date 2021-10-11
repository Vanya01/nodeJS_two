const router = require('express')
    .Router();

const {isUserValid} = require('../midleWars/midlvarOne');
const userController = require("../Controllers/user_controller");

router.post('/login',
    isUserValid,
    userController.createUser);

module.exports = router;
