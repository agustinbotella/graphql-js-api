const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
require('dotenv').config();

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

mongoose
  .connect(process.env.MONGO_DB, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return server.listen({ port: 4001 });
  })
  .then((res) => console.log(`Apollo Server running at ${res.url}`));
