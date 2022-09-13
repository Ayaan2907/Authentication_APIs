const { createUser, getAllUsers, deleteUser, logIn, getGpsData} = require('./controller');
const { validateToken } = require('../auth/tokenValidation');
const router = require('express').Router();
// router.use(validateToken);

// public routes
router.post('/signup', createUser);
router.get('/login', logIn);

// protected routes
router.get('/users',validateToken, getAllUsers);
router.delete('/user/:id',validateToken, deleteUser);
router.get('/gps',validateToken, getGpsData);

module.exports = router;