import React from 'react';
import { connect } from 'react-redux';

const History = ({ history }) => {
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

const mapStateToProps = state => ({
  history: state.history.history
});

export default connect(mapStateToProps)(History);