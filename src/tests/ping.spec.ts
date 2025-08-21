import Fastify, { FastifyInstance } from 'fastify'
import routes from '../../src/interfaces/routes/test.route';
import { describe, it, expect, beforeAll, afterAll } from 'vitest'

describe('GET /ping', () => {
  let app: FastifyInstance

  beforeAll(async () => {
    app = Fastify()
    await app.register(routes)
    await app.ready()
  });

  afterAll(async () => {
    await app.close()
  });

  it('should return pong message with timestamp', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/ping',
    })

    expect(response.statusCode).toBe(200);

    const body = response.json();
    expect(body).toHaveProperty('pong', 'it works!');
    expect(body).toHaveProperty('timestamp');
    expect(typeof body.timestamp).toBe('string');
  });
});
