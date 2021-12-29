import * as dotenv from 'dotenv';

dotenv.config();

export const envConfig = {
  db: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    cluster: process.env.DB_CLASTER
  },
  port: process.env.PORT,
  host: '0.0.0.0'
};
