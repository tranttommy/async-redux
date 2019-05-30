import fetchCharacters from '../services/avatarApi';

export const FETCH_CHARACTERS = 'FETCH_CHARACTERS';
export const dispatchCharacters = () => dispatch => {
  return fetchCharacters()
    .then(characters => {
      dispatch({
        type: FETCH_CHARACTERS,
        payload: characters
      });
    });
};
