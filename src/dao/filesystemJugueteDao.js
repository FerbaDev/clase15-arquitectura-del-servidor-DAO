import fs from "fs";

class FileSystemJugueteDao {
    async addJuguete(datosJuguete) {
        try {
            //Leer el archivo actual: 
            const juguetes = await this.readFile();

            //Agregar el nuevo juguete: 
            juguetes.push(datosJuguete);

            //Escribimos el archivo actualizado: 
            await this.writeFile(juguetes);
            return datosJuguete;
        } catch (error) {
            throw new Error("Error al crear un juguete en file system. ")
        }
    }

    async getJuguetes() {
        try {
            //Leer el archivo y retornarlo: 
            const juguetes = await this.readFile();
            return juguetes;
        } catch (error) {
            throw new Error("Error al obtener los juguetes en file system. ")
        }
    }

    //Métodos auxiliares: 
    async readFile() {
        try {
            const data = await fs.promises.readFile("./juguetes.json");
            return JSON.parse(data);
        } catch (error) {
            throw new Error("No se puede leer el archivo en file sytem dao");
        }
    }

    async writeFile(data) {
        try {
            await fs.promises.writeFile("./juguetes.json", JSON.stringify(data, null, 2));
        } catch (error) {
            throw new Error("No podemos escribir el archivo en file systme dao");
        }
    }
}

export default FileSystemJugueteDao;