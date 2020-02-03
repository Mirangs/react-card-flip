import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { CardsContext } from '../../context/cardsContext';


import './Card.css';

const Card = ({ status, number }) => {
  const [flipped, setFlipped] = useState(status === actionTypes.PLAYING_STATUS);
  const { onCardClick } = useContext(CardsContext);

  useEffect(() => {
    setFlipped(status === actionTypes.PLAYING_STATUS);
  }, [status]);

  const flipCard = () => {
    onCardClick(number);
    setFlipped(false);
  }

  return(
    <section className={`card ${flipped && 'flipped'}`} onClick={status === actionTypes.PLAYING_STATUS ? flipCard : null}>
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

const mapStateToProps = state => ({
  status: state.status.status
});

export default connect(mapStateToProps)(Card);