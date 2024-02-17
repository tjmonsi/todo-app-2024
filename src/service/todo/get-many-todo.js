import { firestore } from '../../utils/firestore/index.js'

export async function getManyTodo (request, response) {
  const { query } = request;

  const collection = firestore.collection('todos');

  const snapshot = await collection.orderBy('dateCreated', 'desc').get();
  const data = snapshot.docs.map(doc => {
    const docData = doc.data();
    return {
      ...docData,
      todoId: doc.id,
      dateCreated: docData.dateCreated.toDate().getTime(),
      dateUpdated: docData.dateUpdated.toDate().getTime()
    };
  });

  console.log(query);
  return {
    success: true,
    data
  };
}