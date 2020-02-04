import React from 'react';
import CardsList from './components/CardsList/CardsList';
import { CardsContext } from './context/cardsContext';
import History from './components/History/History';

//Material UI Modal
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

//Redux
import { connect } from 'react-redux';
import * as actions from './store/actions/';
import * as actionTypes from './store/actions/actionTypes';

import './App.css';

const App = ({
  cards,
  result,
  status,
  fetchCards,
  setResult,
  setStatus,
  addEntry
}) => {
  const initializeCards = length => {
    fetchCards(length);
    setStatus(actionTypes.PENDING_STATUS);
  }

  const onPlayClick = () => {
    const newArray = [...cards];
    newArray.sort((a, b) => a - b);
    setResult(newArray);
    setStatus(actionTypes.PLAYING_STATUS);
  }

  const onCardClick = number => {
    const resultCopy = [...result];
    if (number !== resultCopy.shift()) {
      setStatus(actionTypes.LOOSE_STATUS);
      addEntry(actionTypes.LOOSE_STATUS, cards.length);
      handleOpen();
    } else if (resultCopy.length === 0) {
      setStatus(actionTypes.WIN_STATUS);
      addEntry(actionTypes.WIN_STATUS, cards.length);
      handleOpen();
    } else {
      setResult(resultCopy);
    }
  }

  const onReplayed = () => {
    setStatus(actionTypes.START_STATUS);
  }

  const useStyles = makeStyles(theme => ({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CardsContext.Provider value={{ onCardClick }}>
      <main className="page-content">
        <div className="App">
          {
            status === actionTypes.START_STATUS &&
            <>
              <h2 className="App__title">Choose cards amount:</h2>
              <button className="btn" onClick={() => initializeCards(4)}>4</button>
              <button className="btn" onClick={() => initializeCards(8)}>8</button>
              <button className="btn" onClick={() => initializeCards(12)}>12</button>
            </>
          }
          { 
            cards.length !== 0 && status !== actionTypes.START_STATUS &&
            <CardsList cards={cards} onPlayClick={onPlayClick} />
          }
          {
            (status === actionTypes.WIN_STATUS || status === actionTypes.LOOSE_STATUS) &&
            <>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={open}>
                  <div className={classes.paper}>
                    <h2>You {status === actionTypes.WIN_STATUS ? 'Win' : 'Loose'}!</h2>
                    <button className="btn" onClick={onReplayed}>Play again</button>
                  </div>
                </Fade>
              </Modal>
            </>
          }
        </div>
        <History /> 
      </main>
    </CardsContext.Provider>
  );
}

const mapStateToProps = state => ({
  cards: state.cards.cards,
  result: state.cards.result,
  status: state.status.status
});

const mapDispatchToProps = dispatch => ({
  fetchCards: length => dispatch(actions.fetchCards(length)),
  setResult: result => dispatch(actions.setResult(result)),
  setStatus: status => dispatch(actions.setStatus(status)),
  addEntry: (status, cardsAmount) => dispatch(actions.addEntry(status, cardsAmount))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
