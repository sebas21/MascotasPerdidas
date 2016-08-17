//cargar el modelo
var userModel = require('../model/User');
var db = require('../model/connection');


//crear usuarios
exports.addUser = function(req,res){
	//creo una instancia del model mongoose User
	newUser = new userModel({
		Cedula: req.body.Cedula,
		Nombre: req.body.Nombre,
		Apellido: req.body.Apellido,
		Correo: req.body.Correo
	});
	//usar el metodo save de la instancia user para salvar un nuevo documento user
	newUser.save(function(err,user){
		if(err){
			//llama al framework con un error
			return res.status(500).send(err.message);
		}
		//usar el objeto response para enviar una respuesta json
		res.status(200).jsonp(user);
	});
};


exports.findAllUsers = function(req,res){
	//usa el metodo static"user" "findi" para recuperar todos los usuarios
	userModel.find(function(err,users){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(users);
	});
};


//trae solo las cosas que queramos
exports.findAnyUser = function(req,res,next){
	//usa el metodo static"user" "findi" para recuperar todos los usuarios
	userModel.find({},'Correo',function(err,users){
		if(err){
			return res.status(500).send(err.message);
		}
		res.status(200).jsonp(users);
	});
};



exports.findById = function(req, res) {
	userModel.findById(req.params.id, function(err, user) {
    if(err) return res.send(500, err.message);

		res.status(200).jsonp(user);
	});
};



//PUT - Update a register already exists
exports.updateUser = function(req, res) {
	userModel.findById(req.params.id, function(err, user) {
		user.Cedula: req.body.Cedula,
		user.Nombre: req.body.Nombre,
		user.Apellido: req.body.Apellido,
		user.Correo: req.body.Correo
		user.save(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200).jsonp(user);
		});
	});
};

//DELETE - Delete a TVShow with specified ID
exports.deleteUser = function(req, res) {
	userModel.findById(req.params.id, function(err, user) {
		user.remove(function(err) {
			if(err) return res.send(500, err.message);
      res.status(200);
		})
	});
};
