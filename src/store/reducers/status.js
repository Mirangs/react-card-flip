import * as actionTypes from '../actions/actionTypes';

const initialState = {
  status: actionTypes.START_STATUS
};

const setStatus = (state, action) => {
  return {
    ...state,
    status: action.status
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_STATUS:  return setStatus(state, action);
    default:                      return state;
  }
}

export default reducer;