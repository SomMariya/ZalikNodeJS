import axios from 'axios';
import { HttpError } from '../../http-error';
// import { Url } from '../../apiConstants';
// import { Users } from '../../models';
import { envConfig } from '../../../env-config';

const city_name = 'London';

export const getTheweather = async () => {
  try {
    const response = await axios.get(
      `api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${envConfig.apiKey}`
    );
    console.log(response);
    return response.data;
  } catch {
    throw new HttpError({
      message: 'Oops! Can not get the weather',
      status: 404
    });
  }
};

export const post = async (post) => {
  console.log(post);
  return { post };
};

// export const getAllUsers = async () => {
//   try {
//     const response = await axios.get(`${Url}/users`);
//     const users = response.data.map((user) => ({
//       ...user,
//       geo: {
//         lat: user && user.geo ? Number(user.geo.lat) : 0,
//         lng: user && user.geo ? Number(user.geo.lng) : 0
//       }
//     }));
//     await Users.create(users);
//     return response.data;
//   } catch {
//     throw new HttpError({
//       message: 'Oops! Can not get all users',
//       status: 404
//     });
//   }
// };
