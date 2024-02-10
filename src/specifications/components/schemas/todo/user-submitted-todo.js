export const userSubmittedTodo = {
  type: 'object',
  properties: {
    title: {
      $ref: '#/components/schemas/todoTitle'
    },
    description: {
      $ref: '#/components/schemas/todoDescription'
    },
    completed: {
      $ref: '#/components/schemas/todoCompleted'
    }
  },
  
}