var passport = require('passport');

var passportConfig = function (server) {
//config de passport

	server.use(passport.initialize());
	server.use(passport.session());
//serializador del usuario
	passport.serializeUser(function (user, done) {
		done(null, user); // va a trae la variable cuando este loggeado req.user
	});
	passport.deserializeUser(function (user, done) {
		done(null, user);
	});

	require('./local.js')(server);//sino da server cambiarlo por app
	require('./facebook.js')(server);

};

module.exports = passportConfig;