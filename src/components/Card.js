import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const { cardName, cardDescription, cardImage, cardAttr1, cardAttr2,
      cardAttr3, cardRare, cardTrunfo, deleteBtn, deleteCard } = this.props;

    return (
      <div>
        <h2 className="text-center">Preview da Carta</h2>
        <h2 data-testid="name-card">{ cardName }</h2>
        <img
          data-testid="image-card"
          src={ cardImage }
          alt="Nome da carta"
          className="imagem"
        />
        <p data-testid="description-card">{ `Descrição: ${cardDescription}` }</p>
        <p data-testid="attr1-card">{ `Atributo1: ${cardAttr1} `}</p>
        <p data-testid="attr2-card">{ `Atributo2: ${cardAttr2} `}</p>
        <p data-testid="attr3-card">{ `Atributo3: ${cardAttr3} `}</p>
        <p data-testid="rare-card">{ `Tipagem:  ${cardRare} `}</p>
        { (cardTrunfo) && <h2 data-testid="trunfo-card">Super Trunfo</h2> }
        { (deleteBtn) && (
          <button
            onClick={ deleteCard }
            data-testid="delete-button"
            type="button"
          >
            Excluir
          </button>
        ) }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  deleteBtn: PropTypes.bool.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardAttr3: PropTypes.number.isRequired,
  cardAttr2: PropTypes.number.isRequired,
  cardAttr1: PropTypes.number.isRequired,
  deleteCard: PropTypes.func.isRequired,
};
