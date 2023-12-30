const express = require('express');
const UserController = require('../controllers/usersControllers');

const router = express.Router();

// Định nghĩa các endpoint và gắn với các phương thức tương ứng trong Controller
router.get('/users', UserController.getUsers);
router.get('/users/:id', UserController.getUsersID);
router.post('/users', UserController.addUsers);
router.delete('/users/:id', UserController.deletaUsers);
router.put("/users/:id", UserController.updateUsers);


module.exports = router;