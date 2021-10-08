const router = require('express').Router();

const userController = require('../Controllers/user_controller');
const {createUserMiddleVar, checkLogin, checkUserId} = require('../midleWars/midlvarOne');

router.get('/', userController.getUsers);
router.post('/', createUserMiddleVar, checkLogin, userController.createUser);

router.get('/:user_id', userController.getUsersById);
router.delete('/:user_id', checkUserId, userController.deleteUser);
router.post('/login', userController.login);

module.exports = router;
