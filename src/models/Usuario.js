const mongoose=require("mongoose");

const usuarioSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports=mongoose.model('Usuario',usuarioSchema);