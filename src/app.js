import Fastify from 'fastify';
import openApiGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import apiRef from '@scalar/fastify-api-reference';
import sensible from '@fastify/sensible';
import { Service } from './service/index.js';
import { specification } from './specifications/index.js';

export async function build () {
  const fastify = Fastify({ logger: true });

  fastify.register(sensible);

  const options = {
    specification,
    service: new Service()
  }

  await fastify.register(swagger, {
    openapi: specification
  });

  await fastify.register(apiRef, {
    routePrefix: '/docs'
  })

  await fastify.register(openApiGlue, options);

  return fastify;
}