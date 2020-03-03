import React from 'react';
import { connect } from 'react-redux';
import { HistoryType } from '../../store/types';

type Props = {
  history: HistoryType
}

const History: React.FC<Props> = ({ history }) => {
  return(
    <section className="history">
      <h2 style={{textAlign: 'center'}}>History</h2>
      <ul>
        {
          history.map(item => (
            <li key={item.date}>{item.date}: {item.status}. Cards: {item.cardsAmount}</li>
          ))
        }
      </ul>
    </section>
  );
};

const mapStateToProps = (state: any) => ({ //TODO: state typing
  history: state.history.history
});

export default connect(mapStateToProps)(History);