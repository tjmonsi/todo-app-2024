import { firestore } from '../../utils/firestore/index.js'

export async function getTodo (request, response) {
  const { params } = request;
  const { todoId } = params
 
  const collection = firestore.collection('todos');
  const doc = await collection.doc(todoId).get();
  
  if (!doc.exists) {
    // return an error
  }

  const todo = doc.data();
  const data = {
    ...todo,
    todoId: doc.id,
    dateCreated: todo.dateCreated.toDate().getTime(),
    dateUpdated: todo.dateUpdated.toDate().getTime()
  };
  
  return {
    success: true, 
    data
  };
}