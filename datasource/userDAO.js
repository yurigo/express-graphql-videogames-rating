const { GenericDAO, connection } = require("./dba");

class UserDAO extends GenericDAO {
    constructor() {
        super("users");
    }

    // getByLogin(login) {
    //     let tabla = this.tabla;
    //     return new Promise(function (res, rej) {
    //         pool.getConnection(function (err, connection) {
    //             if (err) rej(err);
    //             connection.query(
    //                 `SELECT * FROM ${tabla} WHERE login = ?`,
    //                 [login],
    //                 function (error, results, fields) {
    //                     connection.release();
    //                     if (error) return rej(error);
    //                     if (results.length === 0) res(null);
    //                     res(results[0]);
    //                 }
    //             );
    //         });
    //     });
    // }
}

module.exports = UserDAO;
