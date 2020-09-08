import { combineReducers } from 'redux'
import {flightsData} from './flightsData';

export default combineReducers({
  flightsData: flightsData
});