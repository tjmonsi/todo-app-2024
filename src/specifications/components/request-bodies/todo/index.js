export const todoGroup = {
  todoCreateRequest: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/userSubmittedTodo'
        }
      }
    }
  },
  todoUpdateRequest: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/userSubmittedTodo'
        }
      }
    }
  }
}