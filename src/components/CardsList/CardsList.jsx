import React from 'react';
import Card from '../Card/Card';

import './CardsList.css';

const CardsList = ({ cards, onPlayClick }) => {

  return(
    <>
    <h2>Pick cards in ascending order</h2>
    <ul className="cards-list">
      {
        cards.map(number => (<li className="cards-list__item" key={number}>
          <Card number={number} />
        </li>))
      }
    </ul>
    <button className="btn" onClick={onPlayClick}>Play</button>
    </>
  );
};

export default CardsList;