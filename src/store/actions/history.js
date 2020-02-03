import * as actionTypes from './actionTypes';

export const addEntry = (status, cardsAmount) => {
  return {
    type: actionTypes.ADD_HISTORY,
    status,
    cardsAmount
  }
}