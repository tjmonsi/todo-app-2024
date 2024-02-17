export const todoGroup = {
  todoCreateRequest: {
    content: {
      'application/json': {
        schema: {
          $ref: '#/components/schemas/userCreatedTodo'
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