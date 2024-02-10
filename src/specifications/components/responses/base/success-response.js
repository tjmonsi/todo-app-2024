export const successResponse = {
  description: 'Success response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          success: {
            $ref: '#/components/schemas/success'
          }
        }        
      }
    }
  }
}