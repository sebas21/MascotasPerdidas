var express = require('express');
var router = express.Router();
var User =  require('../model/User');


router.get('/', function(req, res) {  

   res.render("index");
});

router.get('/ingresar/',function (req, res) {
			let error_message = req.flash('error')[0];
			 res.locals.error_message = error_message;
		res.render('login.html');
	});

router.get('/salir/',function (req, res) {
//		req.logout();
		res.redirect('/');
	});

router.get('/crear/',function (req, res) {
		return res.render('create_user.html');
	})
	.post(function (req, res) {
		 user = new User({
			username: req.body.username,
			password: req.body.password
		});
		user.save(function (err) {
			if (!err) return res.redirect('/admin/usuarios/');//.html
		})
	});
	



module.exports = router;


