const { connection: conn } = require("../database/connection");

async function puntua(req, res, next) {
  const user_id = req.params.id_user;
  const videogame_id = req.params.id_videogame;
  const score = req.params.score;

  const obj = {
    user: user_id,
    videogame: videogame_id,
    score: score,
  };

  try {
    const [
      rows,
      fields,
    ] = await conn
      .promise()
      .query(`INSERT INTO scores SET ? ON DUPLICATE KEY UPDATE score=?`, [
        obj,
        obj.score,
      ]);
    return res.json(rows);
  } catch (ex) {
    return next(ex);
  }
}

module.exports = { puntua };
