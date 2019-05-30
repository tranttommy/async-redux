import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Characters from '../components/characters/Characters';
import { dispatchCharacters } from '../actions/characterActions';
import { getCharacters } from '../selectors/characterSelectors';

class AllCharacters extends PureComponent {
  static propTypes = {
    characters: PropTypes.array,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Characters characters={this.props.characters} />
    );
  }
}

const mapStateToProps = state => ({
  characters: getCharacters(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(dispatchCharacters());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCharacters);
