import express from "express";
const app = express();
const PUERTO = 8080;

//rutas
app.get("/", (req, res) => {
    res.send("Conectado al servidor")
})

//listen
app.listen(PUERTO, () => {
    console.log("Escuchando en el puerto " + PUERTO);
})