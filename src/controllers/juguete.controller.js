//el controlador es el que manipula las peticiones HTTP
//recibe los datos de la request, dar las respuestas del servidor
// y mostrar los mensajes


class JugueteController {
    async crearJuguete(req, res) {
        try {
            //traemos el metodo desde el servicio
            const juguete = await jugueteService.crearJuguete(req.body); 
            res.json(juguete);
        } catch (error) {
            res.status(500).send("Error del servidor"); 
            
        }
    }

    async obtenerJuguetes(req, res) {
        try {
        const juguetes = await jugueteService.obtenerJuguetes();
        res.json(juguetes);
            
        } catch (error) {
            res.status(500).send("Error del servidor"); 
        }
    }

}

export default JugueteController;