export async function createTodo (request, response) {
  const { body } = request;
  
  const {
    title,
    description
  } = body;

  return {
    success: true,
    data: {
      id: '1',
      title,
      description,
      completed: false,
      userId: 'me'
    }    
  };
}