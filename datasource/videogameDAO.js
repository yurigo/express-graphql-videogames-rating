const { GenericDAO, connection } = require("./dba");

class VideogameDAO extends GenericDAO {
    constructor() {
        super("videogames");
    }
}

module.exports = VideogameDAO;
