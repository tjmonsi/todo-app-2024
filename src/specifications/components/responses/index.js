import { successResponse } from './base/success-response.js';
import { errorResponse } from './base/error-response.js';
import { todoGroup } from './todo/index.js';

export const responses = {
  successResponse,
  errorResponse,
  ...todoGroup
}