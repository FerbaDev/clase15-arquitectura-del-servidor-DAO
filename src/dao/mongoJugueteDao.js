import JugueteModel from "../models/juguete.model.js";
class MongoJugueteDao {
    async addJuguete(datosJuguete) {
        try {
            const juguete = new JugueteModel(datosJuguete);
            return await juguete.save();
        } catch (error) {
            throw new Error("Error al crear juguete en juguete Dao mongo db")
        }
    }

    async getJuguetes() {
        try {
            const juguetes = await JugueteModel.find();
            return juguetes;
        } catch (error) {
            throw new Error("Error al obtener juguete en juguete Dao mongo db")
        }
    }
}

export default MongoJugueteDao;