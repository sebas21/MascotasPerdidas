var express = require('express');
var router = express.Router();
var param= require('express');
var managerUser = require('../controllers/user');

router.get('/', managerUser.findAllUsers);
router.get('/Only', managerUser.findAnyUser);
router.post('/addUser', managerUser.addUser);

router.get('/:id',managerUser.findById);
router.delete('/delete/:id',managerUser.deleteUser);
router.update('/update/:id',managerUser.updateUser);

module.exports = router;