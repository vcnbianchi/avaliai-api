import Fastify, { FastifyInstance } from 'fastify';

const fastify: FastifyInstance = Fastify({
  logger: true,
})

export default fastify;