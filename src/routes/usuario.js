const express=require("express");
const Usuarios=require("../models/Usuario");

const router=express.Router();

//Metodo para obtener el listado de usuarios
router.get("/usuario",(req,res)=>{
    Usuarios.find().select({password:0,__v:0,_id:0})
    .then((data)=>{
        res.json(data)
    })
    .catch((error)=>res.send(error));
})

router.get("/usuario/:nombreUsuario",(req,res)=>{
    const { nombreUsuario }=req.params;

    Usuarios.find({nombreUsuario:nombreUsuario}).select({password:0,__v:0,_id:0})
    .then((data)=>{
        res.json(data);
    })
    .catch((error)=>res.send(error));
})

module.exports = router;