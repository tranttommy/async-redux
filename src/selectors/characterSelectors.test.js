import { getCharacters } from './characterSelectors';

describe('character selectors', () => {
  it('gets characters from state', () => {
    const state = {
      characters: [1, 2]
    };

    expect(getCharacters(state)).toEqual([1, 2]);
  });
});
