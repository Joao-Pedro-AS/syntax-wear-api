// Require the framework and instantiate it

// ESM
import "dotenv/config";
import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";

const PORT = parseInt(process.env.PORT ?? "3000");

const fastify = Fastify({
  logger: true,
});

//Permite o acesso de qualquer frontend
fastify.register(cors, {
  origin: true,
  credentials: true,
});

fastify.register(helmet, {
  contentSecurityPolicy: false,
});

// Declare a route
fastify.get("/", async (request, reply) => {
  return {
    message: "E-commerce Syntax Wear API",
    version: "1.0.0",
    status: "running",
  };
});

//Serve para testar a API.
fastify.get("/health", async (request, reply) => {
  return {
    status: "ok",
    timestamp: new Date().toISOString(),
  };
});

// Run the server!
fastify.listen({ port: PORT }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});

export default fastify;
