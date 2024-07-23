const express = require('express');
const router = express.Router();
const userController = require('../userController');

router.post('/login', userController.loginUser);
router.post('/signup', userController.addNewUser);
router.delete("./delete/:id",userController.deleteUser)
module.exports = router;
