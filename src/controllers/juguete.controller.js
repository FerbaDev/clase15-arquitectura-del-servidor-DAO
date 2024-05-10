//Acá traemos el DAO. 
//SIN FACTORY: 

// import MemoryJugueteDao from "../dao/memoryJugueteDao.js";
// import MongoJugueteDao from "../dao/mongoJugueteDao.js";
// import FileSystemJugueteDao from "../dao/filesystemJuguetDao.js";
//const jugueteService = new MemoryJugueteDao();
//const jugueteService = new MongoJugueteDao();
//const jugueteService = new FileSystemJugueteDao();
//el controlador es el que manipula las peticiones HTTP
//recibe los datos de la request, dar las respuestas del servidor
// y mostrar los mensajes

//CON FACTORY: 

import DAO from "../dao/factory.js";
const jugueteService = new DAO(); 
import JugueteDTO from "../dto/juguete.dto.js";

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