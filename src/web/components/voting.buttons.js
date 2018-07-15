import React, { Component } from 'react';
import { Firebase } from '../../lib/firebase';
import { Button, ButtonGroup } from 'reactstrap';
import moment from 'moment';

class VotingButtons extends Component {
  constructor (props) {
    super(props);

    this.state = {
      cSelected: [],
      firstName: props.member.firstName
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  render() {
    return (
      <div>
        <ButtonGroup>
          <Button color="primary" onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>Up</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>Down</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>Sideways</Button>
          <Button color="primary" onClick={() => this.onRadioBtnClick(4)} active={this.state.rSelected === 4}>Unsure</Button>
        </ButtonGroup>
        <p>Selected: {this.state.rSelected}</p>
      </div>
    );
  }
}

export default VotingButtons;
