import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import CardList from './components/CardList';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      image: '',
      description: '',
      attr1: 0,
      attr2: 0,
      attr3: 0,
      isSaveButtonDisabled: true,
      allCards: [],
      rare: 'normal',
      hasTrunfo: false,
      trunfo: false,
      nameFilter: '',
      rareFilter: 'todas',
      trunfoFilter: false,
    };
    this.validateForms = this.validateForms.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  handleChange({ target: { value, id, checked, type } }) {
    const changeValue = (type === 'checkbox') ? checked : value;
    this.setState(() => ({ [id]: changeValue }), this.validateForms);
  }

  onSaveButtonClick() {
    const { name, description, image, rare, attr3, attr2, attr1, trunfo } = this.state;
    const obj = { name, description, image, rare, attr3, attr2, attr1, trunfo };
    this.setState(({ allCards }) => ({ allCards: [...allCards, obj] }), () => {
      this.setState(() => ({
        name: '',
        description: '',
        image: '',
        rare: 'normal',
        attr1: 0,
        attr2: 0,
        attr3: 0,
      }));
      if (trunfo) this.setState(() => ({ hasTrunfo: true, trunfo: false }));
    });
  }

  deleteCard(item) {
    const { allCards } = this.state;
    const filteredCards = allCards.filter((_, i) => i !== item);
    const card = allCards.find((_, i) => i === item);
    if (card.trunfo) this.setState(() => ({ hasTrunfo: false }));
    this.setState(() => ({ allCards: filteredCards }));
  }

  validateForms() {
    const { name, description, attr1, attr2, attr3, image, rare } = this.state;
    let validate = true;
    if (Number(attr1) + Number(attr2) + Number(attr3) > Number('210')) {
      validate = false;
    }
    if (Number(attr1) > Number('90') || Number(attr1) < 0) validate = false;
    if (Number(attr2) > Number('90') || Number(attr2) < 0) validate = false;
    if (Number(attr3) > Number('90') || Number(attr3) < 0) validate = false;
    if (name && description && image && rare && validate) {
      this.setState(() => ({ isSaveButtonDisabled: false }));
    } else {
      this.setState(() => ({ isSaveButtonDisabled: true }));
    }
  }

  render() {
    const { name, description, attr1, attr2, attr3, image, rare, nameFilter, rareFilter,
      hasTrunfo, trunfo, isSaveButtonDisabled, allCards, trunfoFilter } = this.state;

    return (
      <div>
        <h1 className="text-center">Tryunfo</h1>
        <Filters
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          handleChange={ this.handleChange }
        />
        <Form
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChange }
          onSaveButtonClick={ this.onSaveButtonClick }
        />
        <Card
          cardName={ name }
          cardDescription={ description }
          cardAttr1={ attr1 }
          cardAttr2={ attr2 }
          cardAttr3={ attr3 }
          cardImage={ image }
          cardRare={ rare }
          cardTrunfo={ trunfo }
        />
        <CardList
          nameFilter={ nameFilter }
          rareFilter={ rareFilter }
          trunfoFilter={ trunfoFilter }
          deleteCard={ this.deleteCard }
          allCards={ allCards }
        />
      </div>
    );
  }
}
