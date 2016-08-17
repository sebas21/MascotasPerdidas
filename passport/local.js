var passport = require('passport'),
	  localStrategy = require('passport-local').Strategy,
	  User = require('../model/User').User;

var local = function (server) {

	passport.use(new localStrategy({ //llamo la strategia
			usernameField: 'Cedula', //escojo ocn que me voy a ahutentificar
			passwordField: 'Cedula',
		},
		function (Cedula, Cedula, done) {
			User.findOne({Cedula: Cedula}).then(function (User) {
				if (!User) return done(null, false, {message: `El username ${Cedula} no existe!`});
				if (User.Cedula === Cedula) {
					return done(null, user);
				} else {
					return done(null, false, {message: 'El password es incorrecto'});
				}
			});
		}
	));

	server.post('/login/', passport.authenticate('local', {  // 'local' es la estrategia el /login/ es lo que hay en el method posrt del formulairo en login .html
				successRedirect: '/', //redirige el login
				failureRedirect: '/ingresar/', //si fall a donde
				failureFlash: true, //enviar mensajes de error como  {message: `El username ${Cedula} no existe!`}
	}));

};

module.exports = local;