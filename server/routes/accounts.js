const express = require('express');
const UserController = require('../controllers/accountController');

const router = express.Router();

// Định nghĩa các endpoint và gắn với các phương thức tương ứng trong Controller
router.get('/accounts', UserController.getAccounts);
router.get('/accounts/:id', UserController.getAccountsID);
router.post('/accounts', UserController.addAccounts);
router.delete('/accounts/:id', UserController.deletaAccounts);
router.put("/accounts/:id", UserController.updateAccounts);
router.put('/users/:id',UserController.updateUsers)

module.exports = router;