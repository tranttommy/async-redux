import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

export default function Character({ character }) {
  return (
    <>
      <h2>{character.name}</h2>
      <img src={character.photoUrl} />
    </>
  );
}

Character.propTypes = {
  character: PropTypes.object.isRequired
};
