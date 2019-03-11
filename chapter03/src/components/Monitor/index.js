import React, { Component } from 'react';
import Cicle from './Cicle'
import Line from './Line'

export default class Monitor extends Component {
  
  render() {
    const { lineData, cicleData} = this.props
    return (
      <div>
        <Cicle cicleData={cicleData}/>
        <Line lineData={lineData}/>
      </div>
    );
  }
}
