class MemoryJugueteDao {
    constructor() {
        this.juguetes = [];
    }

    async addJuguete(datosJuguete) {
        try {
            this.juguetes.push(datosJuguete);
            return datosJuguete;
        } catch (error) {
            throw new Error("Error al crear juguete en memory")
        }
    }

    async getJuguetes() {
        try {
            return this.juguetes;
        } catch (error) {
            throw new Error("Error al obtener juguete en memory")
        }
    }
}

export default MemoryJugueteDao;