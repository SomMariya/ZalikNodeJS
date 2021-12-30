import axios from 'axios';
import { HttpError } from '../../http-error';
import { Url } from '../../apiConstants';
import { envConfig } from '../../../env-config';

import { CityData } from '../../models';

export const getWeather = async (city_name) => {
  try {
    const response = await axios.get(
      `${Url}/weather?q=${city_name}&appid=${envConfig.apiKey}`
    );
    const city = CityData.find({ name: city_name });
    if (city) {
      return city;
    } else {
      await CityData.create(response.data);
    }
  } catch {
    throw new HttpError({
      message: 'Oops! Can not get weather for this city',
      status: 404
    });
  }
};
