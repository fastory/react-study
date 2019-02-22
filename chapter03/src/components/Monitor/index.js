import React, { Component } from 'react';
import Cicle from './Cicle'
import Line from './Line'

export default class Monitor extends Component {
  render() {
    return (
      <div>
        <Cicle />
        <Line />
      </div>
    );
  }
}
