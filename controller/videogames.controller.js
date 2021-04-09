const { connection: conn } = require("../database/connection");

async function all(req, res, next) {
    console.log("all videogames");
    const [rows, fields] = await conn
        .promise()
        .query(`SELECT * FROM videogames`);
    if (rows.length === 0)
        return next({ status: 404, error: `videogames not found` });
    //return res.json(rows.map(({ id, name }) => ({ id, name })));
    return res.json(rows);
}
async function get(req, res, next) {
    let id = req.params.id;
    const [
        rows,
        fields,
    ] = await conn
        .promise()
        .query(`SELECT * FROM videogames WHERE id = ?`, [id]);
    if (rows.length === 0)
        return next({ status: 404, error: `videogames not found` });
    return res.json(rows);
}

async function post(req, res, next) {
    let name = req.params.name;
    try {
        const [rows, fields] = await conn
            .promise()
            .query(`INSERT INTO videogames (name) VALUES (?)`, name);
        return res.json(rows);
    } catch (ex) {
        return next(ex);
    }
}

async function del(req, res, next) {
    var idGame = req.params.id;

    try {
        const [resultado2] = await conn
            .promise()
            .query("DELETE FROM scores WHERE videogame = ?", idGame);

        const [resultado] = await conn
            .promise()
            .query("DELETE FROM videogames WHERE id = ?", idGame);

        return res.json(resultado);
    } catch (ex) {
        return next(ex);
    }
}

module.exports = { all, get, post, del };
