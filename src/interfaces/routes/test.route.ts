import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';

const routes = async (fastify: FastifyInstance, options: Object) => {
  const opts = {
    schema: {
      response: {
        200: {
          type: 'object',
          properties: {
            pong: { type: 'string' },
            timestamp: { type: 'string' }
          }
        }
      }
    }
  };

  fastify.get('/ping', opts, async (request: FastifyRequest, reply: FastifyReply) => {
    return { pong: 'it works!', timestamp: new Date().toISOString() };
  });
};

export default routes;