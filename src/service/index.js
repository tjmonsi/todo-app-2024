import { getTodo } from './todo/get-todo.js';
import { createTodo } from './todo/create-todo.js';
import { updateTodo } from './todo/update-todo.js';
import { deleteTodo } from './todo/delete-todo.js';
import { getManyTodo } from './todo/get-many-todo.js';

async function home (req, reply) {
  return { success: false };
}

export class Service {
  home = home
  getTodo = getTodo
  createTodo = createTodo
  updateTodo = updateTodo
  deleteTodo = deleteTodo
  getManyTodo = getManyTodo
}