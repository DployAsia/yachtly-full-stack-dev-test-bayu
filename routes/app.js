var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('app/index', { title: 'Yachtly App' });
});

router.get('/user/list', function(req, res, next) {
    res.render('app/listUser', { title: 'Yachtly - User List' });
});

router.get('/user/create', function(req, res, next) {
    res.render('app/addUser', { title: 'Yachtly - Add User' });
});

router.get('/user/edit/:id', function(req, res, next) {
    res.render('app/editUser', { title: 'Yachtly - Edit User', user_id: req.params.id });
});

module.exports = router;