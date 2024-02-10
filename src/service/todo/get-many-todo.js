export async function getManyTodo (request, response) {
  const { query } = request;
  console.log(query);
  return {
    success: true,
    data: [
      {
        id: '1',
        title: 'First Todo',
        description: 'This is the first todo',
        completed: false,
        userId: 'me'
      },
      {
        id: '2',
        title: 'Second Todo',
        description: 'This is the second todo',
        completed: false,
        userId: 'me'
      },
      {
        id: '3',
        title: 'Third Todo',
        description: 'This is the third todo',
        completed: false,
        userId: 'me'
      }
    ]
  };
}