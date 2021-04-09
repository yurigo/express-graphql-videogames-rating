const typeDefs = `
    type Query {
        videogames: [Videogame]
        videogame(id: ID!): Videogame
        users: [User]
        user(id: ID!): User
    }

    type Mutation {
        score(videogame: Int!, user: Int!, score: Int!): Score
        user(name: String!, login: String!): User
        videogame(name: String!): Videogame
    }

    type Videogame {
        id: ID!
        name: String
        eman: String
        score: Float
        count: Int
        scores: [Score]
        users: [User]
    }

    type User {
        id: ID!
        login: String!
        name: String
        avg: Float
        scores: [Score]
        videogames: [Videogame]
    }

    type Score {
        user: User
        videogame: Videogame
        score: Int
    }
`;

module.exports = typeDefs;
