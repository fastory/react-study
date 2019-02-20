import React, { Component } from 'react';
import styles from './index.scss'

export default class Title extends Component {
    render() {
        return (
            <h2 className={styles.h2}>{this.props.name}</h2>
        );
    }
}
