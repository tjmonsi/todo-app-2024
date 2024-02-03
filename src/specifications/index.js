export const specification = {
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