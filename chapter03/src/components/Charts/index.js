import React, { Component } from 'react';
import { Chart, Geom, Axis, Tooltip, Legend } from 'bizcharts';

// 数据源

export default class Charts extends Component {
    render() {
        const { dataList, cols} = this.props
        return (
            <Chart width={600} height={400} data={dataList} scale={cols}>
                <Axis name="genre" />
                <Axis name="sold" />
                <Legend position="top" dy={-20} />
                <Tooltip />
                <Geom type="interval" position="genre*sold" color="genre" />
            </Chart>
        );
    }
}
