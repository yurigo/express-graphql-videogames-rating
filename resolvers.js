const ScoreDAO = require("./datasource/scoreDAO");
const UserDAO = require("./datasource/userDAO");
const VideogameDAO = require("./datasource/videogameDAO");

const dataSources = {
    VideogameDAO: new VideogameDAO(),
    UserDAO: new UserDAO(),
    ScoreDAO: new ScoreDAO(),
};

module.exports = {
    Query: {
        videogames: async (_, __) => await dataSources.VideogameDAO.all(),
        videogame: async (_, { id }) => await dataSources.VideogameDAO.get(id),
        users: async (_, __) => await dataSources.UserDAO.all(),
        user: async (_, { id }) => await dataSources.UserDAO.get(id),
    },

    Videogame: {
        eman: async ({ name }) => name.split("").reverse().join(""),
        score: async ({ id }, _) =>
            await dataSources.ScoreDAO.GetScoreVideogame(id),
        count: async ({ id }, _) =>
            await dataSources.ScoreDAO.GetCountVideogame(id),
        scores: async ({ id }, _) =>
            await dataSources.ScoreDAO.GetScoresVideogame(id),
    },

    User: {
        scores: async ({ id }, _) =>
            await dataSources.ScoreDAO.GetScoresUser(id),
    },

    Score: {
        videogame: async ({ videogame }, _) =>
            await dataSources.VideogameDAO.get(videogame),
        user: async ({ user }, _) => await dataSources.UserDAO.get(user),
    },
};
