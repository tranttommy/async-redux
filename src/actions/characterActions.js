import fetchCharacters from '../services/avatarApi';

export const DISPATCH_CHARACTERS = 'DISPATCH_CHARACTERS';
export const dispatchCharacters = () => ({
  type: DISPATCH_CHARACTERS,
  payload: fetchCharacters()
});
