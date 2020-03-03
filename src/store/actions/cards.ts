import { CardsType, ResultType, SetCardsActionType, SetResultActionType, FetchCardsFailActionType } from '../types';
import * as actionTypes from './actionTypes';

export const setCards = (cards: CardsType): SetCardsActionType => {
  return {
    type: actionTypes.SET_CARDS,
    cards
  }
}

export const setResult = (result: ResultType): SetResultActionType => {
  return {
    type: actionTypes.SET_RESULT,
    result
  }
}

export const fetchCardsFailed = (): FetchCardsFailActionType => {
  return {
    type: actionTypes.FETCH_CARDS_FAIL
  }
}

export const fetchCards = (length: number) => {
  return (dispatch: Function) => { //TODO: dispatch typing
    fetch('https://card-flip-backend.herokuapp.com/api/generate', 
    { method: 'POST', body: JSON.stringify({ length }), headers: { 'Content-Type': 'application/json' }})
      .then(res => res.json())
      .then((data) => dispatch(setCards(data.array)))
      .catch(err => dispatch(fetchCardsFailed()));
  }
}