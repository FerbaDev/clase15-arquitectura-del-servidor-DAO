import mongoose from "mongoose";

const schema = new mongoose.Schema({
    nombre: String,
    categoria: String, 
    precio: Number
})

const JuguetesModel = mongoose.model("juguetes", schema);

export default JuguetesModel; 