import * as actionTypes from './actionTypes';

export const setCards = cards => {
  return {
    type: actionTypes.SET_CARDS,
    cards
  }
}

export const setResult = result => {
  return {
    type: actionTypes.SET_RESULT,
    result
  }
}

export const fetchCardsFailed = () => {
  return {
    type: actionTypes.FETCH_CARDS_FAIL
  }
}

export const fetchCards = length => {
  return dispatch => {
    fetch('https://card-flip-backend.herokuapp.com/api/generate', { method: 'POST', body: JSON.stringify({ length }), headers: { 'Content-Type': 'application/json' }})
      .then(res => res.json())
      .then(data => dispatch(setCards(data.array)))
      .catch(err => dispatch(fetchCardsFailed()));
  }
}