import React, { Component } from 'react';
import Monitor from '../../components/Monitor'


export default class pageMonitor extends Component {

    state = {
        lineData: [
            {
                month: "Jan",
                Tokyo: 7.0,
                London: 3.9
            },
            {
                month: "Feb",
                Tokyo: 6.9,
                London: 4.2
            },
            {
                month: "Mar",
                Tokyo: 9.5,
                London: 5.7
            },
            {
                month: "Apr",
                Tokyo: 14.5,
                London: 8.5
            },
            {
                month: "May",
                Tokyo: 18.4,
                London: 11.9
            },
            {
                month: "Jun",
                Tokyo: 21.5,
                London: 15.2
            },
            {
                month: "Jul",
                Tokyo: 25.2,
                London: 17.0
            },
            {
                month: "Aug",
                Tokyo: 26.5,
                London: 16.6
            },
            {
                month: "Sep",
                Tokyo: 23.3,
                London: 14.2
            },
            {
                month: "Oct",
                Tokyo: 18.3,
                London: 10.3
            },
            {
                month: "Nov",
                Tokyo: 13.9,
                London: 6.6
            },
            {
                month: "Dec",
                Tokyo: 9.6,
                London: 4.8
            }
        ],
        cicleData: [
            {
                item: "事例一",
                count: 40
            },
            {
                item: "事例二",
                count: 21
            },
            {
                item: "事例三",
                count: 17
            },
            {
                item: "事例四",
                count: 13
            },
            {
                item: "事例五",
                count: 9
            }
        ]
    }
    render() {
        const { cicleData, lineData } = this.state
        return (
            <Monitor cicleData={cicleData} lineData={lineData} />
        )
    }
}
