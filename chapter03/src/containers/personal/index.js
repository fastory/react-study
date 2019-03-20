import React, { Component } from 'react';
import User from '../../components/Personal';
import CountDown from '../../components/Personal/CountDown';

export default class Personal extends Component {
    render() {
        return (
            <div style={{marginTop:'20px'}}>
                <CountDown />
                <User />
            </div>
        )
    }
}
