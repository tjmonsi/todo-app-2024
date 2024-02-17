export const errorResponse = {
  description: 'Error response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          success: {
            $ref: '#/components/schemas/success'
          },
          error: {
            type: 'string'
          }
        }        
      }
    }
  }
}