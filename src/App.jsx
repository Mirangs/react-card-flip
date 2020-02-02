import React, {useState} from 'react';
import CardsList from './components/CardsList/CardsList';
import { CardsContext } from './context/cardsContext';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';

import './App.css';

const App = () => {
  const [cards, setCards] = useState([]);
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState('start');

  const initializeArray = length => {
    const array = [];
    while(array.length < length) {
      const item = Math.floor(Math.random() * 100) + 1;
      if (array.indexOf(item) === -1) array.push(item);
    }

    setStatus('pending');
    return array;
  }

  const onPlayClick = () => {
    const sortedCards = [...cards];
    sortedCards.sort((a, b) => a - b);
    setResult(sortedCards);
    setStatus('playing');
  }

  const onCardClick = number => {
    const resultCopy = [...result];
    if (number !== resultCopy.shift()) {
      setStatus('loose');
      handleOpen();
    } else if (resultCopy.length === 0) {
      setStatus('win');
      handleOpen();
    } else {
      setResult(resultCopy);
    }
  }

  const onReplayed = () => {
    setStatus('start');
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
    <CardsContext.Provider value={{ cards, result, status, onCardClick }}>
      <div className="App">
        {
          status === 'start' &&
          <>
            <h2 className="App__title">Choose cards amount:</h2>
            <button className="btn" onClick={() => setCards(initializeArray(4))}>4</button>
            <button className="btn" onClick={() => setCards(initializeArray(8))}>8</button>
            <button className="btn" onClick={() => setCards(initializeArray(12))}>12</button>
          </>
        }
        { 
          cards.length !== 0 && status !== 'start' &&
          <CardsList cards={cards} onPlayClick={onPlayClick} />
        }
        {
          (status === 'win' || status === 'loose') &&
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
                  <h2>You {status}!</h2>
                  <button className="btn" onClick={onReplayed}>Play again</button>
                </div>
              </Fade>
            </Modal>
          </>
        }
      </div>
    </CardsContext.Provider>
  );
}

export default App;
