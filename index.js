import fastify from 'fastify';
import fastifyCors from 'fastify-cors';
import { routes } from './src/api/routes';
import { envConfig } from './env-config';
import { connectDB } from './src/db';
import { logger } from './src/utils';

const server = fastify();

server.register(fastifyCors, {
  origin: ['http://127.0.0.1:3000', 'https://zalik-nodejs.herokuapp.com/'],
  methods: ['GET', 'POST']
});

routes.forEach((route) => {
  server.route(route);
});

connectDB();

server.listen(envConfig.port || 3000, envConfig.host, (err, address) => {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.info(`Server listening at ${address}`);
});
