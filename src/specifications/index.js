import { paths } from './paths/index.js';
import { components } from './components/index.js';

export const specification = {
  openapi: '3.1.0',
  info: {
    title: 'Todo App API',
    description: 'Todo App API documentation',
    version: '0.0.0'
  },
  paths,
  components
}