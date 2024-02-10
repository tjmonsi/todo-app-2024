export const todo = {
  '/todo': {
    // GET MANY TODO USING THE GET METHOD
    get: {
      summary: 'Get many todo',
      description: 'Get many todo data point',
      operationId: 'getManyTodo',
      responses: {
        200: {
          $ref: '#/components/responses/todoManyResponse'
        }
      }
    },
    // CREATE THE TODO USING THE POST METHOD
    post: {
      summary: 'Create one todo',
      description: 'Create one todo data point',
      operationId: 'createTodo',
      requestBody: {
        $ref: '#/components/requestBodies/todoCreateRequest'
      },
      responses: {
        200: {
          $ref: '#/components/responses/todoResponse'
        }
      }
    },
  },
  '/todo/{todoId}': {
    // GET ONE TODO USING THE GET METHOD USING THE todoId AS PARAMETER
    get: {
      summary: 'Get one todo',
      description: 'Get one todo data point',
      operationId: 'getTodo',
      parameters: [
        {
          $ref: '#/components/parameters/todoId'
        }
      ],
      responses: {
        200: {
          $ref: '#/components/responses/todoResponse'
        }
      }
    },
    // UPDATE ONE TODO USING THE PUT METHOD USING THE todoId AS PARAMETER
    put: {
      summary: 'Update one todo',
      description: 'Update todo data point',
      operationId: 'updateTodo',
      parameters: [
        {
          $ref: '#/components/parameters/todoId'
        }
      ],
      responses: {
        200: {
          $ref: '#/components/responses/todoResponse'
        }
      }
    },
    // DELETE ONE TODO USING THE DELETE METHOD USING THE todoId AS PARAMETER
    delete: {
      summary: 'Delete one todo',
      description: 'Delete todo data point',
      operationId: 'deleteTodo',
      parameters: [
        {
          name: 'todoId',
          in: 'path',
          required: true,
          schema: {
            type: 'string'
          }
        }
      ],
      responses: {
        200: {
          $ref: '#/components/responses/todoResponse'
        }
      }
    }
  }
}