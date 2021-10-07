const router = require('express').Router();

const userController = require('../Controllers/user_controller');
const userVar = require('../midleWars/midlvarOne');


router.get('/', userController.getUsers);

router.post('/', userVar.createUserMiddleVar,userVar.checkLogin,userController.createUser);

router.get('/:user_id', userController.getUsersById);

module.exports = router;
