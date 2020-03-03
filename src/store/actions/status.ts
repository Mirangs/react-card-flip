import * as actionTypes from './actionTypes';
import { GameStatusType, SetStatusActionType } from '../types';

export const setStatus = (status: GameStatusType): SetStatusActionType => {
  return {
    type: actionTypes.SET_STATUS,
    status
  }
}