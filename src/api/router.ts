const { createUser, getAllUsers, deleteUser, logIn, updatePassword, forgotPassword } = require('./controller');
const { validateToken } = require('../auth/tokenValidation');
const router = require('express').Router();
// router.use(validateToken);

// public routes
router.post('/signup', createUser);
router.post('/login', logIn);

// protected routes
router.get('/users',validateToken, getAllUsers);
router.delete('/user/:id', validateToken, deleteUser);
router.put('/user/update', validateToken, updatePassword);
// router.post('/user/:id/forgotPassword', validateToken, forgotPassword);



module.exports = router;