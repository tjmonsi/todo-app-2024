export async function deleteTodo (request, response) {
  const { params } = request;
  
  const {
    todoId
  } = params;
  
  return {
    success: true
  };
}