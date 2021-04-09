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
        videogames: async (_, __) => {
            let data = await dataSources.VideogameDAO.all();
            return data;
        },
        videogame: async (_, { id }) => await dataSources.VideogameDAO.get(id),
        users: async (_, __) => await dataSources.UserDAO.all(),
        user: async (_, { id }) => await dataSources.UserDAO.get(id),
    },

    // Mutation: {
    //     videogame: async (_, args) => {
    //         const restaurante = {};
    //         restaurante.nombre = args.nombre ? args.nombre : undefined;
    //         restaurante.x = args.x ? args.x : undefined;
    //         restaurante.y = args.y ? args.y : undefined;
    //         let response = await dataSources.RestauranteDAO.insert(restaurante);
    //         restaurante.id = response.insertId;
    //         return restaurante;
    //     },
    //     user: async (_, args) => {
    //         const usuario = {};
    //         usuario.nombre = args.nombre;
    //         usuario.login = args.login;
    //         let response = await dataSources.UsuarioDAO.insert(usuario);
    //         usuario.id = response.insertId;
    //         return usuario;
    //     },
    //     score: async (_, args) => {
    //         const puntuacion = {};
    //         puntuacion.restaurante = args.restaurante;
    //         puntuacion.usuario = args.usuario;
    //         puntuacion.valoracion = args.valoracion;

    //         console.log(puntuacion);

    //         let response = await dataSources.PuntuacionDAO.puntua(puntuacion);
    //         return puntuacion;
    //     },
    // },

    Videogame: {
        scores: async ({ id }, _) =>
            await dataSources.ScoreDAO.GetScoreVideogame(id),
    },

    User: {
        scores: async ({ id }, _) =>
            await dataSources.ScoreDAO.GetScoreUser(id),
    },

    Score: {
        videogame: async ({ videogame }, _) =>
            await dataSources.VideogameDAO.get(videogame),
        user: async ({ user }, _) => await dataSources.UserDAO.get(user),
    },
};
