import { configureStore } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  count: 0,
};

// Reducer function
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, count: state.count + 1 };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

// Create Redux store using configureStore
const store = configureStore({
  reducer: {
    counter: counterReducer,  // Add your reducer here
  },
});

export default store;
