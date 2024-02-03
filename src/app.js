import Fastify from 'fastify';
import openApiGlue from 'fastify-openapi-glue';
import swagger from '@fastify/swagger';
import apiRef from '@scalar/fastify-api-reference';

export async function build () {
  const fastify = Fastify({ logger: true });

  const specification = {
    openapi: '3.1.0',
    info: {
      title: 'Todo App API',
      description: 'Todo App API documentation',
      version: '0.0.0'
    },
    paths: {
    '/': {
        get: {
        summary: 'Home get',
        description: 'Getting the home data',
        operationId: 'home',
        responses: {
            200: {
            description: 'OK',
            content: {
                'application/json': {
                schema: {
                    type: 'object',
                    properties: {
                      success: { 
                        type: 'boolean' 
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  function home (req, reply) {
    return { success: true };
  }

  class Service {
    home = home
  }

  const options = {
    specification,
    service: new Service()
  }

  await fastify.register(swagger, {
    openapi: specification
  });

  await fastify.register(apiRef, {
    routePrefix: '/docs',
    configuration: {
      spec: {
        content: () => fastify.swagger()
      }
    }
  })

  await fastify.register(openApiGlue, options);

  return fastify;
}