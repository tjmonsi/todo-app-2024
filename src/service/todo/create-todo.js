import { firestore } from '../../utils/firestore/index.js'
import { FieldValue } from '@google-cloud/firestore';

export async function createTodo (request, response) {
  const { body } = request;

  const collection = firestore.collection('todos');
  
  body.completed = false;

  const doc = collection.doc();
  await doc.set({
    ...body,
    dateCreated: FieldValue.serverTimestamp(),
    dateUpdated: FieldValue.serverTimestamp()
  });

  const docSnapshot = await doc.get();
  const data = docSnapshot.data();

  return {
    success: true,
    data: {
      ...data,
      todoId: doc.id,
      dateCreated: data.dateCreated.toDate().getTime(),
      dateUpdated: data.dateUpdated.toDate().getTime()
    }    
  };
}