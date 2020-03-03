import * as actionTypes from '../actions/actionTypes';
import { GameStatusType, StatusActionType, SetStatusActionType } from '../types';

type InitialStateType = {
  status: GameStatusType
}

const initialState: InitialStateType = {
  status: actionTypes.START_STATUS
};

const setStatus = (state: InitialStateType, action: SetStatusActionType): InitialStateType => {
  return {
    ...state,
    status: action.status
  }
}

const reducer = (state = initialState, action: StatusActionType): InitialStateType => {
  switch(action.type) {
    case actionTypes.SET_STATUS:  return setStatus(state, action);
    default:                      return state;
  }
}

export default reducer;