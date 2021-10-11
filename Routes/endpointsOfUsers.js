const router = require('express')
    .Router();

const userController = require('../Controllers/user_controller');
const {createUserMiddleVar} = require('../midleWars/midlvarOne');

router.get('/', userController.getUsers);
router.put('/:user_id',
    createUserMiddleVar,
    userController.updateUser);

router.post('/', userController.createUser);
router.get('/:user_id', userController.getUsersById);
router.delete('/:user_id', userController.deleteUser);

module.exports = router;
