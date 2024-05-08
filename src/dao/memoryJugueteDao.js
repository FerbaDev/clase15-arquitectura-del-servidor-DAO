class MemoruJugueteDao {
    constructor() {
        this.juguetes = [];
    }

    async addJuguetes(datosJuguete) {
        try {
            this.juguetes.push(datosJuguete);
            return datosJuguete;
        } catch (error) {
            throw new Error("Error al crear juguete en memory")
        }
    }

    async getJugeuete() {
        try {
            return this.juguetes;
        } catch (error) {
            throw new Error("Error al obtener juguete en memory")
        }
    }
}

export default MemoruJugueteDao;