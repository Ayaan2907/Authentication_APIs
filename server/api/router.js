const { createUser, getAllUsers, deleteUser } = require('./controller');
const router = require('express').Router();

router.post('/signup', createUser);
router.get('/users', getAllUsers);
router.delete('/user/:id', deleteUser);

module.exports = router;