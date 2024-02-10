export async function updateTodo (request, response) {
  const { body, params } = request;
  const { id } = params
  
  const {
    title,
    description,
    completed
  } = body;
  
  return {
    success: true,
    data: {
      id: '1',
      title,
      description,
      completed,
      userId: 'me'
    }    
  };
}