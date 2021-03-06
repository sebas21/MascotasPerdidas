//dependencias

var express = require('express');
var mongoose = require('mongoose');
var bodyParser  = require("body-parser");
var session = require('express-session');
var cookieParser = require('cookie-parser');
var methodOverride = require("method-override");
var path = require('path');
var flash= require('connect-flash');
var app = express();


//cargo las rutas
var indexRoute = require('./routes/index');
var usersRoute = require('./routes/user');

//cokkies de las sessiones "codigo de la docmuentacion de coockie parce"
app.use(cookieParser());

//mensajes flash
app.use(flash());

app.use(session({
	
	//configuracion de la pagina de express-sesion
	secret: 'keyboard cat',
	resave: false,
	saveUninitialized: true
}));

//passport
require('./passport/passport')

// Middlewares
app.use(bodyParser.urlencoded({ extended: false })); //extend define con que libreria va hacer el parcing 
app.use(bodyParser.json());  //para peticiones aplication/json
app.use(methodOverride());

//creacion de una ruta relativa "public"
app.use(express.static('public'));

//uso de la ruta relativa "public" para utilizar los archivos html de la carpeta "views"
app.set('views', path.join(__dirname, 'public/views'));
app.engine("html",require("ejs").renderFile);
app.set('view engine', 'html');

app.use('/',indexRoute);

app.use('/users',usersRoute);
//Creacion del puerto 
app.listen(3000, function() {  
	console.log("Servidor escuchando en el puerto 3000");
});
//exportacion de la variable "app" para poder utilizarse en otros ficheros
module.exports = app;

