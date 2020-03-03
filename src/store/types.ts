import * as actionTypes from './actions/actionTypes';

export type CardsType = Array<number>;
export type ResultType = CardsType;

export type FetchCardsFailActionType = {
  type: typeof actionTypes.FETCH_CARDS_FAIL
}

export type SetResultActionType = {
  type: typeof actionTypes.SET_RESULT,
  result: ResultType
}

export type SetCardsActionType = {
  type: typeof actionTypes.SET_CARDS,
  cards: CardsType
}

export type CardsActionType = FetchCardsFailActionType | SetResultActionType | SetCardsActionType;

export type GameStatusType = typeof actionTypes.START_STATUS | typeof actionTypes.PENDING_STATUS | typeof actionTypes.PLAYING_STATUS | typeof actionTypes.WIN_STATUS | typeof actionTypes.LOOSE_STATUS

export type SetStatusActionType = {
  type: typeof actionTypes.SET_STATUS
  status: GameStatusType
}

export type StatusActionType = SetStatusActionType;

interface AddHistoryAction {
  type: typeof actionTypes.ADD_HISTORY,
  status: typeof actionTypes.WIN_STATUS | typeof actionTypes.LOOSE_STATUS,
  cardsAmount: number
}

export type HistoryEntryType = {
  date: string
  status: string
  cardsAmount: number
}

export type HistoryType = Array<HistoryEntryType>;

export type HistoryActionType = AddHistoryAction;
