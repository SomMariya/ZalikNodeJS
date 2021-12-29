import { handler } from '../../utils';
import { getAllUsers, getTheweather, post } from '../services';

export const routes = [
  {
    method: 'GET',
    url: '/users',
    handler: handler(() => getAllUsers())
  },
  {
    method: 'GET',
    url: '/weather',
    handler: handler(() => getTheweather())
  },

  {
    method: 'POST',
    url: '/api/blogs',
    handler: handler((req) => post(req.body))
  }
];
