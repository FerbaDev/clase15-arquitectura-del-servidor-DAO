import mongoose from "mongoose";

mongoose.connect("mongodb+srv://talba:talba@clustertalba.vnmlpsv.mongodb.net/Jugueteria?retryWrites=true&w=majority&appName=ClusterTalba")
    .then(() => console.log("Conectado a Mongo DB"))
    .catch((error) => {console.log("Error de conexión a Mongo DB", error)})