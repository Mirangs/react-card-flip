import { combineReducers } from 'redux';
import cardsReducer from './cards';
import statusReducer from './status';

export default combineReducers({
  cards: cardsReducer,
  status: statusReducer
});