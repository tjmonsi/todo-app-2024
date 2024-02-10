export async function getTodo (request, response) {
  const { params } = request;
  const { id } = params
 
  console.log(id);
  
  return {
    success: true, 
    data: {
      id,
      title: 'First Todo',
      description: 'This is the first todo',
      completed: false,
      userId: 'me'
    }
  };
}