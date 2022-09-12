const { createUser, getAllUsers, deleteUser, logIn} = require('./controller');
const router = require('express').Router();

router.post('/signup', createUser);
router.get('/users', getAllUsers);
router.delete('/user/:id', deleteUser);
router.get('/login', logIn);
module.exports = router;