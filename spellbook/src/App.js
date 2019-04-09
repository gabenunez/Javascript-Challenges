import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import SpellList from './components/spell_list'
import SelectedSpells from './components/selected_spells';
import './App.css';

class App extends Component {
  state = {
    selectedSpells: []
  }

  addSpell = (spell) => {
    const {selectedSpells} = this.state;

    if(!selectedSpells.includes(spell)) {
      this.setState({
        selectedSpells: selectedSpells.concat(spell)
      })
    }
  }

  removeSpell = (spell) => {
    const {selectedSpells} = this.state;

    if(selectedSpells.includes(spell)) {
      this.setState({
        selectedSpells: selectedSpells.filter(str => str !== spell)
      })
    }

  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col md='9'>
            <Row>
              <SpellList addSpell={this.addSpell} removeSpell={this.removeSpell} selectedSpells={this.state.selectedSpells} />
            </Row>
          </Col>
          <Col md='3'>
            <SelectedSpells selectedSpells={this.state.selectedSpells} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
