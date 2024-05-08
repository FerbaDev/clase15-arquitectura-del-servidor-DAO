import MemoryJugueteDao from "../dao/memoryJugueteDao.js";
const jugueteService = new MemoryJugueteDao();
//el controlador es el que manipula las peticiones HTTP
//recibe los datos de la request, dar las respuestas del servidor
// y mostrar los mensajes

class JugueteController {
    async addJuguete(req, res) {
        try {
            //traemos el metodo desde el servicio
            const juguete = await jugueteService.addJuguete(req.body); 
            res.json(juguete);
        } catch (error) {
            res.status(500).send("Error del servidor"); 
            
        }
    }

    async getJuguetes(req, res) {
        try {
        const juguetes = await jugueteService.getJuguetes();
        res.json(juguetes);
            
        } catch (error) {
            res.status(500).send("Error del servidor"); 
        }
    }

}

export default JugueteController;