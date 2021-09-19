const express = require('express');

// Import ApolloServer class
const { ApolloServer } = require('apollo-server-express');

const path = require('path');

//  Bring in the auth middleware
const { authMiddleware } = require('./utils/auth');

// Import the two parts of a GraphQL schema
const { typeDefs, resolvers } = require('./schemas');

//  Bring in the mongodb from connection.js
const db = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

// Create new instance of Apollo server with GraphQL schema
const server = new ApolloServer({
  typeDefs, 
  resolvers,
  context: authMiddleware,
});

// Update Express.js to use Apollo server
server.applyMiddleware({ app });


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
 });

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 API server now listening on localhost:${PORT}`);
    console.log(`GraphQL running at http://localhost:${PORT}${server.grahpqlPath}`);
  });
});
