const { GenericDAO, connection } = require("./dba");

// const RestauranteDAO = require("./videogameDAO")
// const UsuarioDAO = require("./userDAO")

class ScoreDAO extends GenericDAO {
    constructor() {
        super("scores");
    }

    async GetScoreVideogame(idVideogame) {
        let tabla = this.tabla;
        //prettier-ignore
        const [data] = await connection
            .promise()
            .query(`SELECT * FROM ${tabla} WHERE videogame = ?`, [idVideogame]);

        return data;
    }

    async GetScoreUser(idUser) {
        let tabla = this.tabla;
        //prettier-ignore
        const [data] = await connection
            .promise()
            .query(`SELECT * FROM ${tabla} WHERE user = ?`, [idUser]);

        return data;
    }
}

module.exports = ScoreDAO;
