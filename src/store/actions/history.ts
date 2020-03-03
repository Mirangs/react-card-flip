import * as actionTypes from './actionTypes';
import { GameStatusType } from '../types';

export const addEntry = (status: GameStatusType, cardsAmount: number) => {
  return {
    type: actionTypes.ADD_HISTORY,
    status,
    cardsAmount
  }
}