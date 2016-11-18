const mongoose = require('mongoose');

const Schema = mongoose.Schema;

function validateCoordinates(coordinateArray) {
  let valid = true;

  for (const coordinate of coordinateArray) {
    if (coordinate.length < 2 || coordinate.length > 3) {
      valid = false;
      break;
    }
  }

  return valid;
}

const FeatureItemsSchema = new Schema({
  type: {
    $type: String,
    enum: ['Feature'],
    default: 'Feature',
  },
  properties: {
    name: {
      $type: String,
      required: true,
    },
  },
  geometry: {
    type: {
      $type: String,
      required: true,
    },
    coordinates: {
      $type: [[Number]],
      required: true,
      validate: [validateCoordinates, '{PATH} Invalid co-ordinates specified.'],
    },
  },
}, { typeKey: '$type' });

const MapSchema = new Schema({
  name: {
    $type: String,
    required: true,
  },
  data: {
    type: {
      $type: String,
      enum: ['FeatureCollection'],
      default: 'FeatureCollection',
    },
    features: {
      $type: [FeatureItemsSchema],
      default: [],
    },
  },
}, { typeKey: '$type' });

mongoose.model('Map', MapSchema);
