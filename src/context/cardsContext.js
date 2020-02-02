import { createContext } from 'react';

const noop = () => {};

export const CardsContext = createContext({
  cards: [],
  result: [],
  status: null,
  onCardClick: noop
});