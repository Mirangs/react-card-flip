import { createContext } from 'react';

export const noop = () => {};

interface CardsContextType {
  onCardClick: (number: number) => void
}

export const CardsContext = createContext<CardsContextType>({
  onCardClick: noop
});