const express=require("express");
const mongoose=require("mongoose");
const usuarioRoutes=require("./routes/usuario");

//settings
const app=express();
const port=4000;
const MONGO_URI="mongodb+srv://educa:Educa2023*@cluster0.l6uuwqs.mongodb.net/appRifasDB?retryWrites=true&w=majority"

//routes
app.use("/api",usuarioRoutes);

app.get("/",(req,res)=>{
    res.send("<h1>App Rifas</h1>");
})

//MongoDB Connection
mongoose
    .connect(MONGO_URI)
    .then(()=>console.log("Conetado a MongoDB"))
    .catch((error)=>console.error(error));



app.listen(port,()=>{
    console.log("Applicacion corriendo en puerto ",port);
})

