import { success } from './base/success.js';
import { todoGroup } from './todo/index.js';
import { userGroup } from './user/index.js';

export const schemas = {
  success,
  ...todoGroup,
  ...userGroup
}

/* 
the "...todoGroup" is the same as 
import { todoId } from './todo/todo-id.js';
import { todoTitle } from './todo/todo-title.js';
import { todoDescription } from './todo/todo-description.js';
import { todoCompleted } from './todo/todo-completed.js';

export const schemas = {
  todoId,
  todoTitle,
  todoDescription,
  todoCompleted
}

*/