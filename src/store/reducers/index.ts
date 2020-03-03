import { combineReducers } from 'redux';
import cardsReducer from './cards';
import statusReducer from './status';
import historyReducer from './history';

export default combineReducers({
  cards: cardsReducer,
  status: statusReducer,
  history: historyReducer
});