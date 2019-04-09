import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import uniqid from 'uniqid';

class SelectedSpells extends Component {
  generateListItems() {
    const {selectedSpells} = this.props;
    const selectedList = selectedSpells.map(spell => {
      return (
        <ListGroupItem key={uniqid('ss-')}>
          {spell}
        </ListGroupItem>
      )
    })
    return selectedList;
  }

  render() {
    const {selectedSpells} = this.props;
    if(selectedSpells < 1) {
        return (
          <ListGroup>
            <ListGroupItem>
              Please add a spell!
            </ListGroupItem>
          </ListGroup>
        )
    }
    return (
      <ListGroup>
        {this.generateListItems()}
      </ListGroup>
    )
  }
}

export default SelectedSpells;