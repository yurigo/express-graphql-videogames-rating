const { connection } = require("./db");

class GenericDAO {
    /**
     * Constructor de GenericDAO recibe el nombre de la tabla.
     * @param {string} tcud Nombre de la tabla de la base de datos
     * @param {string} tr (Opcional), si se especifica se utiliza este nombre de tabla para hacer las selects.
     */
    constructor(tabla, tabla_select = tabla) {
        // console.log(tr, tcud)
        this.tabla = tabla;
        this.tabla_select = tabla_select; //tr ? tr : tcud;
    }

    // async existe(id){
    //     let obj = await this.get(id);
    //     return obj === []
    // }

    async all() {
        console.log("all()", this.tabla_select);

        const [data] = await connection
            .promise()
            .query(`SELECT * FROM ${this.tabla}`);
        return data;
    }

    async get(id) {
        //prettier-ignore
        const [data] = await connection
            .promise()
            .query(`SELECT * FROM ${this.tabla} WHERE id = ?`, [id]);
        return data[0];
    }
}

module.exports = { GenericDAO, connection };
