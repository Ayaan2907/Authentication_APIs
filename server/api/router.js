const { createUser, getAllUsers, deleteUser, logIn} = require('./controller');
const { validateToken } = require('../auth/tokenValidation');
const router = require('express').Router();
// router.use(validateToken);

// public routes
router.post('/signup', createUser);
router.get('/login', logIn);

// protected routes
router.get('/users',validateToken, getAllUsers);
router.delete('/user/:id',validateToken, deleteUser);

module.exports = router;