require("dotenv").config();

const express = require("express");
const app = express();

const typeDefs = require("./typedefs");
const resolvers = require("./resolvers");

// const VideogameDAO = require("./datasource/videogameDAO");
// const UserDAO = require("./datasource/userDAO");
// const ScoreDAO = require("./datasource/scoreDAO");

// ROUTES
const usersRoute = require("./routes/users.route");
const videogamesRoute = require("./routes/videogames.route");

app.use("/users", usersRoute);
app.use("/videogames", videogamesRoute);

var { graphqlHTTP } = require("express-graphql");
// var { buildSchema } = require("graphql");

const { makeExecutableSchema } = require("graphql-tools");

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers,
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema: schema,
        graphiql: true,
    })
);

//fallback public
app.all("*", (req, res, next) => {
    console.log(req.url);
    next({
        status: 404,
        error: "Not found",
    });
});

app.use((err, req, res, next) => {
    // console.log("error", err);
    res.status(err.status).json(err);
});

const port = 4000;

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
