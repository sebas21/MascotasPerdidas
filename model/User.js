//cargar el modulo mongoose y el objeto schema
var db = require('../model/Connection');
var Schema = db.Schema;

//creating new schema 
var userSchema = new Schema({

      Cedula: {
        type: String,
        required: true,
        unique: true
    },

    Nombre: {
        type: String,
        required: true,
        maxlength:[15,"Nombre muy grande"],
        maxlength:[2,"Nombre muy grande"]
    },

    Apellido: {
        type: String,
        required: true
    },

    Correo: {
        type: String,
        required: true
        
    }

});

//get and export the collection 'users' in DB
module.exports = db.model('users', userSchema);
