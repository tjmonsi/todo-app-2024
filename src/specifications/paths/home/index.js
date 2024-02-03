export const home = {
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