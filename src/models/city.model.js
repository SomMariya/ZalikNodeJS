import mongoose, { Schema } from 'mongoose';

const citySchema = new Schema(
  {
    created_at: { type: Date, expires: '2h', default: Date.now },
    coord: { lat: Number, lng: Number },
    weather: [
      {
        id: Number,
        main: String,
        description: String,
        icon: String
      }
    ],
    base: String,
    main: {
      temp: Number,
      feels_like: Number,
      temp_min: Number,
      temp_max: Number,
      pressure: Number,
      humidity: Number
    },
    visibility: Number,
    wind: {
      speed: Number,
      deg: Number,
      gust: Number
    },
    clouds: {
      all: Number
    },
    dt: Number,
    timezone: Number,
    id: Number,
    name: String,
    cod: Number
  },

  { versionKey: false }
);

export const CityData = mongoose.model('CityData', citySchema, 'cityData');
