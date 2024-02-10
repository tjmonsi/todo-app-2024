export const todo = {
  type: 'object',
  properties: {
    todoId: {
      $ref: '#/components/schemas/todoId'
    },
    title: {
      $ref: '#/components/schemas/todoTitle'
    },
    description: {
      $ref: '#/components/schemas/todoDescription'
    },
    completed: {
      $ref: '#/components/schemas/todoCompleted'
    },
    userId: {
      $ref: '#/components/schemas/userId'
    }
  },
  
}