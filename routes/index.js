var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Yachtly' });
});

router.get('/users', function(req, res, next) {
  res.render('listUser', { title: 'Yachtly - User List' });
});

router.get('/user/add', function(req, res, next) {
  res.render('addUser', { title: 'Yachtly - Add User' });
});

router.get('/user/edit/:id', function(req, res, next) {
  res.render('editUser', { title: 'Yachtly - Edit User', user_id: req.params.id});
});

module.exports = router;