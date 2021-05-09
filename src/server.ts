import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import schema from './schema';
import { createServer } from 'http';

const app = express();

app.use(cors());
app.use(compression());

const server = new ApolloServer({
    schema,
    introspection: true
});

server.applyMiddleware({app});


const PORT = 3000;
const httpServer = createServer(app);

httpServer.listen(
    {port: PORT},
    () => console.log(`open in  http://localhost:${PORT}/graphql`)
);