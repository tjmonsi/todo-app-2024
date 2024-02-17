import { firestore } from '../../utils/firestore/index.js';

export async function deleteTodo (request, response) {
  const { params } = request;
  
  const {
    todoId
  } = params;

  const collection = firestore.collection('todos');
  const doc = collection.doc(todoId);
  await doc.delete();
  
  return {
    success: true
  };
}