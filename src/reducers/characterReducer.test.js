import characterReducer from './characterReducer';
import { DISPATCH_CHARACTERS } from '../actions/characterActions';

describe('character reducer', () => {
  it('returns initial state with init', () => {
    const action = {
      type: '@@INIT'
    };

    expect(characterReducer(undefined, action)).toEqual([]);
  });

  it('returns new state with DISPATCH_CHARACTERS', () => {
    const initialState = [1, 2, 3];
    const action = {
      type: DISPATCH_CHARACTERS,
      payload: [4, 5, 6]
    };

    const newState = characterReducer(initialState, action);
    expect(newState).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
