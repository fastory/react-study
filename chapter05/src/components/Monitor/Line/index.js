import React, { Component } from 'react';
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Legend
} from "bizcharts";
import DataSet from "@antv/data-set";

export default class Line extends Component {
    render() {
        const data = this.props.lineData;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: "fold",
            fields: ["Tokyo", "London"],
            // 展开字段集
            key: "city",
            // key字段
            value: "temperature" // value字段
        });
        console.log(dv);
        const cols = {
            month: {
                range: [0, 1]
            }
        };
        return (
            <Chart height={400} data={dv} scale={cols} forceFit>
                <Legend />
                <Axis name="month" />
                <Axis
                    name="temperature"
                    label={{
                        formatter: val => `${val}°C`
                    }}
                />
                <Tooltip
                    crosshairs={{
                        type: "y"
                    }}
                />
                <Geom
                    type="line"
                    position="month*temperature"
                    size={2}
                    color={"city"}
                />
                <Geom
                    type="point"
                    position="month*temperature"
                    size={4}
                    shape={"circle"}
                    color={"city"}
                    style={{
                        stroke: "#fff",
                        lineWidth: 1
                    }}
                />
            </Chart>
        );
    }
}
