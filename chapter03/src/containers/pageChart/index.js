import React, { Component } from 'react';
import Analyze from '../../components/Analyze'


export default class PageIndex extends Component {
    state = {
        cols: {
            sold: { alias: '销售量' },
            genre: { alias: '游戏种类' }
        },
        dataList: [
            { genre: 'Sports', sold: 275, income: 2300 },
            { genre: 'Strategy', sold: 115, income: 667 },
            { genre: 'Action', sold: 120, income: 982 },
            { genre: 'Shooter', sold: 350, income: 5271 },
            { genre: 'Other', sold: 150, income: 3710 }
        ]
    }
    render() {
        const { dataList , cols} = this.state
        return (
            <Analyze dataList={dataList} cols={cols} />
        )
    }
}
