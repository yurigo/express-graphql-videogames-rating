const { connection: conn } = require("../database/connection");

async function all(req, res, next) {
  console.log("all users");
  const [users] = await conn
    .promise()
    .query(`SELECT id, login, name FROM users`);
  if (users.length === 0)
    return next({ status: 404, error: `users not found` });

  const [videogames] = await conn
    .promise()
    .query(
      `select * from scores left join videogames on scores.videogame = videogames.id`
    );

  const result = users.map((e) => {
    e.videogames = videogames
      .filter((a) => a.user === e.id)
      .map(({ user, videogame, ...agua }) => agua);
    //.map(({ id, name, score }) => ({ id, name, score }));
    return e;
  });

  return res.json(result);
}

async function get(req, res, next) {
  const id = req.params.id;
  console.log("get user", id);
  try {
    const [
      rows,
      fields,
    ] = await conn
      .promise()
      .query(`SELECT id, login, name FROM users WHERE id = ?`, [id]);
    if (rows.length === 0) return next({ error: `user (${id}) not found` });
    return res.json(rows[0]);
  } catch (ex) {
    return next(ex);
  }
}

async function add(req, res, next) {
  const obj = {
    login: req.body.login,
    name: req.body.name,
    password: "xxx",
  };

  console.log(obj);
  // res.send(obj);
  // return;

  try {
    const [resultado] = await conn
      .promise()
      .query("INSERT INTO users SET ?", obj);

    obj.id = resultado.insertId;
    delete obj.password;

    return res.json(obj);
  } catch (ex) {
    return next(ex);
  }
}

async function del(req, res, next) {
  var idUser = req.params.id;

  try {
    const [resultado2] = await conn
      .promise()
      .query("DELETE FROM scores WHERE user = ?", idUser);

    const [resultado] = await conn
      .promise()
      .query("DELETE FROM users WHERE id = ?", idUser);

    return res.json(resultado);
  } catch (ex) {
    return next(ex);
  }
}

async function put(req, res, next) {
  return res.json({ error: "a implementar" });
}

async function videogames(req, res, next) {
  return res.json({ error: "a implementar" });
}

module.exports = { all, get, add, del, put, videogames };
