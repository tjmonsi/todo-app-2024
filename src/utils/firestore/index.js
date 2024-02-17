import { Firestore } from '@google-cloud/firestore';

export const firestore = new Firestore({
  projectId: 'tj-todo-app-project-01'
});