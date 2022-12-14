import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filters extends Component {
  render() {
    const { nameFilter, handleChange, rareFilter, trunfoFilter } = this.props;
    return (
      <div>
        <h2 className="text-center">Pesquisar</h2>
        <label htmlFor="nameFilter">
          Filtrar Por Nome:
          <input
            onChange={ handleChange }
            value={ nameFilter }
            id="nameFilter"
            data-testid="name-filter"
            type="text"
          />
        </label>
        <label htmlFor="rareFilter">
          Tipagem:
          <select
            onChange={ handleChange }
            value={ rareFilter }
            id="rareFilter"
            data-testid="rare-filter"
            type="text"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          Super Trunfo:
          <input
            onChange={ handleChange }
            checked={ trunfoFilter }
            id="trunfoFilter"
            data-testid="trunfo-filter"
            type="checkbox"
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  handleChange: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
};
