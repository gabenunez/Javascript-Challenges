import React, { Component } from 'react';
import { Row, Col,Card, CardText, CardBody,
        CardTitle, CardSubtitle, Button } from 'reactstrap';

class SpellCard extends Component {

  state = {
    spellInfo: {}
  }

  getSpellInfo = (spell) => {
    fetch(spell.url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            spellInfo: result
          })
          console.log(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }
  
  render() {
    const {spell, selectedSpells, addSpell, removeSpell} = this.props;
    const {spellInfo} = this.state

    return (
      <Col lg='4'>
        <Card>
          <CardBody>
            <CardTitle>{spell.name}</CardTitle>

              {spellInfo.level >= 0 ? 
                <CardSubtitle>
                  {`Level: ${spellInfo.level}`}
                </CardSubtitle> 
                : null}

              {spellInfo.desc ?
                <CardText>
                  Description:
                  <br />
                  {spellInfo.desc.join(' ')}
                </CardText> 
                : null
              }

            <Row>
              <Col lg='12'>
                <Button color="secondary" onClick={() => this.getSpellInfo(spell)}>Learn More</Button> 
              </Col>
              <Col lg='12'>
                {!selectedSpells.includes(spell.name) ? (
                <Button color="info" onClick={() => addSpell(spell.name)}>Add Spell</Button> 
                ) : (
                <Button color="danger" onClick={() => removeSpell(spell.name)}>Remove Spell</Button> 
                )}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default SpellCard;