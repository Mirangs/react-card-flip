import React, { useContext, useState, useEffect } from 'react';
import { CardsContext } from '../../context/cardsContext';

import './Card.css';

const Card = ({ number }) => {
  const { status, onCardClick } = useContext(CardsContext);
  const [flipped, setFlipped] = useState(status === 'playing');

  useEffect(() => {
    setFlipped(status === 'playing');
  }, [status]);

  const flipCard = () => {
    onCardClick(number);
    setFlipped(false);
  }

  return(
    <section className={`card ${flipped && 'flipped'}`} onClick={status === 'playing' ? flipCard : null}>
      <section className="front">
        <div className="card__content">
          <h2 className="card__title">{number}</h2>
        </div>
      </section>
      <section className="back">
      </section>
    </section>
  );
};

export default Card;