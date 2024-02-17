export const userCreatedTodo = {
  type: 'object',
  properties: {
    title: {
      $ref: '#/components/schemas/todoTitle'
    },
    description: {
      $ref: '#/components/schemas/todoDescription'
    }
  },
  
}