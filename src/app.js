import express from "express";
const app = express();
const PUERTO = 8080;
import "./database.js";

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//rutas
app.get("/", (req, res) => {
    res.send("Conectado al servidor")
})

//listen
app.listen(PUERTO, () => {
    console.log(`Conectado a http://localhost:${PUERTO}`);
})