const express = require('express');
const router = express.Router();
const userController = require('../userController');
const authMiddleware = require('../middleware')
router.post('/login', userController.loginUser);
router.post('/signup', userController.addNewUser);
router.delete('/:id',userController.deleteUser);

module.exports = router;
