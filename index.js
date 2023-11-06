const counter = document.getElementById('counter');
const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');

const INCREMENT = 'increment';
const DECREMENT = 'decrement';

const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value
  };
};

const decrement = (value) => {
  return {
    type: DECREMENT,
    payload: value
  };
};

const initialState = {
  value: 0
};

// create reducer function
function counterReducer(state = initialState, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload
    };
  } else {
    return state;
  }
}

// create store
const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counter.innerText = state.value.toString();
};

// update ui initially
render();

store.subscribe(render);

// button click listeners
incrementBtn.addEventListener('click', () => {
  store.dispatch(increment(2));
});

decrementBtn.addEventListener('click', () => {
  store.dispatch(decrement(4));
});
