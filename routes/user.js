var express = require('express');
var router = express.Router();

const userController = require('../controllers').user;

router.get('/', userController.list);
router.get('/:id/', userController.getById);
router.post('/add/', userController.add);
router.put('/edit/:id/', userController.update);
router.delete('/:id/', userController.delete);

module.exports = router;