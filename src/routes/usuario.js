const { json } = require("express");
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

router.post("/usuario",(req,res)=>{
    const nuevoUsuario = Usuario(req.body);

       nuevoUsuario.save()
        .then((data)=>{
            console.log(data);
            res.json(data);
        })
        .catch((error)=>{
            console.error(error);
            res.json(error);
        })
});

router.put("/usuario/:nombreUsuario",async (req,res)=>{
    const { nombreUsuario }=req.params;
    nuevoUsuario = req.body;

    Usuarios.updateOne({nombreUsuario:nombreUsuario},
        {$set: {nombreUsuario:nuevoUsuario.nombreUsuario}})
    .then((data)=>{res.json(data)})
    .catch((error)=>res.send(error));
})

router.delete("/usuario/:nombreUsuario",(req,res)=>{
    const { nombreUsuario }=req.params;

    Usuarios.deleteOne({nombreUsuario:nombreUsuario})
    .then((data)=>res.json(data))
    .catch((error)=>res.send(error));
})

module.exports = router;
