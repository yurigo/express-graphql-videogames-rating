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
            .query(`SELECT avg(score) as avg FROM ${tabla} WHERE videogame = ?`, [idVideogame]);
        return data[0].avg;
    }

    async GetCountVideogame(idVideogame) {
        let tabla = this.tabla;
        //prettier-ignore
        const [data] = await connection
            .promise()
            .query(`SELECT count(videogame) as count FROM ${tabla} WHERE videogame = ?`, [idVideogame]);
        return data[0].count;
    }

    async GetScoresVideogame(idVideogame) {
        let tabla = this.tabla;
        //prettier-ignore
        const [data] = await connection
            .promise()
            .query(`SELECT * FROM ${tabla} WHERE videogame = ?`, [idVideogame]);

        return data;
    }

    async GetScoresUser(idUser) {
        let tabla = this.tabla;
        //prettier-ignore
        const [data] = await connection
            .promise()
            .query(`SELECT * FROM ${tabla} WHERE user = ?`, [idUser]);

        return data;
    }
}

module.exports = ScoreDAO;
