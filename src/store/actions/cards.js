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

export const fetchCards = () => {
  return dispatch => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(data => setCards(data))
      .catch(err => dispatch(fetchCardsFailed()));
  }
}