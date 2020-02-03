import * as actionTypes from '../actions/actionTypes';

const initialState = {
  cards: [],
  result: [],
  err: false
}

const setCards = (state, action) => {
  return {
    ...state,
    cards: action.cards
  }
}

const setResult = (state, action) => {
  return {
    ...state,
    result: action.result
  }
}

const fetchCardsFailed = (state, action) => {
  return {
    ...state,
    err: true
  };
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_RESULT:            return setResult(state, action);
    case actionTypes.FETCH_CARDS_FAIL:      return fetchCardsFailed(state, action);
    case actionTypes.SET_CARDS:             return setCards(state, action);
    default:                                return state;
  }
}

export default reducer;