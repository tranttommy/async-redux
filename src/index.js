import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

function reducer(state = {}, action) {
  console.log('In reducer:', action);
  switch(action.type) {
    case 'Hello World':
      return { ...state, results: action.payload };
    case 'poop':
      return 'What are you a child?';
    default:
      return state;
  }
}

const logger1 = store => next => action => {
  console.log('Action before next 1:', action);
  console.log('State before next 1:', store.getState());
  next(action);
  console.log('Action after next 1:', action);
  console.log('State after next 1:', store.getState());
};

const logger2 = store => next => action => {
  console.log('Action before next 2:', action);
  console.log('State before next 2:', store.getState());
  next(action);
  console.log('Action after next 2:', action);
  console.log('State after next 2:', store.getState());
};

const fetcher = () => dispatch => {
  fetch('https://rickandmortyapi.com/api/character/?page=1')
    .then(res => res.json())
    .then(results => {
      dispatch({
        type: 'Hello World',
        payload: results.results
      });
    });
};

const store = createStore(
  reducer,
  applyMiddleware(
    logger1,
    logger2,
    thunk
  )
);

store.dispatch({
  type: 'Hello World'
});

store.dispatch(fetcher());

console.log('Last:', store.getState());
