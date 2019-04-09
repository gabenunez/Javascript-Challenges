import React, { Component } from 'react';
import {Col, Card, CardBody, Spinner } from 'reactstrap';
import SpellCard from './spell_card';  
import uniqid from 'uniqid';

class SpellList extends Component {

  state = {
    spells : [],
    spellInfo: []
  }

  componentDidMount() {
    this.getSpellList();
  }

  getSpellList() {
    fetch("http://www.dnd5eapi.co/api/spells/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            spells: result.results
          })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  generateSpellCards() {
    const {spells} = this.state;
    const {addSpell, removeSpell, selectedSpells} = this.props;

    const cards = spells.map((spell) => {
      return (
        <SpellCard 
          spell={spell} 
          addSpell={addSpell} 
          removeSpell={removeSpell} 
          selectedSpells={selectedSpells}
          key={uniqid('card-')}
        />  
      )
    })

    return cards;
  }

  render() {
    const {spells} = this.state;

    if(spells.length < 1) {
      return (
        <Col md='12' className='text-center'>
          <Card>
            <CardBody>
              <Spinner color="primary" />
            </CardBody>
          </Card>
        </Col>
      )
    }
    return (
      <>
        {this.generateSpellCards()}
      </>
    );
  }
}

export default SpellList;