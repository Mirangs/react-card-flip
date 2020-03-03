import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions/actionTypes';
import { CardsContext, noop } from '../../context/cardsContext';
import { GameStatusType } from '../../store/types';

import './Card.css';

type Props = {
  status: GameStatusType,
  number: number
}

const Card: React.FC<Props> = ({ status, number }) => {
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
    <section className={`card ${flipped && 'flipped'}`} onClick={status === actionTypes.PLAYING_STATUS ? flipCard : noop}>
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

const mapStateToProps = (state: any) => ({
  status: state.status.status
});

export default connect(mapStateToProps)(Card);