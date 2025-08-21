import env from "../config/env.js";
import fastify from "../config/fastify.js";
import routes from "./routes/test.route.js";

const start = async () => {
  try {
    fastify.register(routes);

    await fastify.listen({
      port: env.PORT,
      host: env.HOST
    });

    fastify.log.info(`server listening on ${env.PORT}`);
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
};

start();