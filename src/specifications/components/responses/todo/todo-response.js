export const todoResponse = {
  description: 'Success response',
  content: {
    'application/json': {
      schema: {
        type: 'object',
        properties: {
          success: {
            $ref: '#/components/schemas/success'
          },
          data: {
            $ref: '#/components/schemas/todo'
          }
        }        
      }
    }
  }
}