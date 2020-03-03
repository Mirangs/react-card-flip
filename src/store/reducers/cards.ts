import { SetCardsActionType, FetchCardsFailActionType, SetResultActionType, CardsActionType, CardsType, ResultType } from './../types';
import * as actionTypes from '../actions/actionTypes';

type InitialStateType = {
  cards: CardsType
  result: ResultType
  err: boolean
}

const initialState: InitialStateType = {
  cards: [],
  result: [],
  err: false
}

const setCards = (state: InitialStateType, action: SetCardsActionType) => {
  return {
    ...state,
    cards: action.cards
  }
}

const setResult = (state: InitialStateType, action: SetResultActionType) => {
  return {
    ...state,
    result: action.result
  }
}

const fetchCardsFailed = (state: InitialStateType, action: FetchCardsFailActionType) => {
  return {
    ...state,
    err: true
  };
}

const reducer = (state = initialState, action: CardsActionType): InitialStateType => {
  switch(action.type) {
    case actionTypes.SET_RESULT:            return setResult(state, action);
    case actionTypes.FETCH_CARDS_FAIL:      return fetchCardsFailed(state, action);
    case actionTypes.SET_CARDS:             return setCards(state, action);
    default:                                return state;
  }
}

export default reducer;