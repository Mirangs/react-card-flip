import * as actionTypes from '../actions/actionTypes';

const initialState = {
  history: []
}

const addEntry = (state, action) => {
  const history = [...state.history];
  const item = {
    date: new Date(Date.now()).toLocaleString(),
    status: action.status === actionTypes.WIN_STATUS ? 'Win' : 'Loose',
    cardsAmount: action.cardsAmount
  };

  history.push(item);
  return {
    ...state,
    history
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.ADD_HISTORY:     return addEntry(state, action);
    default:                          return state;
  }
}

export default reducer;