import { successResponse } from './base/success-response.js';
import { todoGroup } from './todo/index.js';

export const responses = {
  successResponse,
  ...todoGroup
}