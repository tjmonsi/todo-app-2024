import { firestore } from '../../utils/firestore/index.js';
import { FieldValue } from '@google-cloud/firestore';

export async function updateTodo (request, response) {
  const { body, params } = request;
  const { todoId } = params
  
  const {
    title,
    description,
    completed
  } = body;

  const collection = firestore.collection('todos');
  const doc = collection.doc(todoId);

  await doc.update({
    title,
    description,
    completed,
    dateUpdated: FieldValue.serverTimestamp()
  });
  
  const snapshot = await doc.get();
  const todo = snapshot.data();
  const data = {
    ...todo,
    todoId: snapshot.id,
    dateCreated: todo.dateCreated.toDate().getTime(),
    dateUpdated: todo.dateUpdated.toDate().getTime()
  };
  
  return {
    success: true,
    data    
  };
}