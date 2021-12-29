import { handler } from '../../utils';
import { get, post } from '../services';

export const routes = [
  {
    method: 'GET',
    url: '/api',
    handler: handler(() => get())
  },
  {
    method: 'POST',
    url: '/api/blogs',
    handler: handler((req) => post(req.body))
  }
];
