export const home = {
  '/': {
    get: {
      summary: 'Home get',
      description: 'Getting the home data',
      operationId: 'home',
      responses: {
        200: {
          $ref: '#/components/responses/successResponse'  
        }
      }
    }
  } 
}