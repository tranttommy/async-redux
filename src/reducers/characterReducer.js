import { DISPATCH_CHARACTERS } from '../actions/characterActions';

const initialState = [];

export default (state = initialState, action) => {
  switch(action.type) {
    case DISPATCH_CHARACTERS:
      return [...state, ...action.payload];
    default:
      return state;
  }
};
