import React, {Component} from 'react';
import Lists from '../../components/lists'

export default class PageLists extends Component {
    editHandle = ()=>{

    }
    state = {
        listData: [{
            key: '1',
            name: '刘亦菲',
            age: 28,
            address: '西湖区湖底公园1号'
        }, {
            key: '2',
            name: '迪丽热巴',
            age: 26,
            address: '西湖区湖底公园1号'
        }, {
            key: '3',
            name: '范冰冰',
            age: 25,
            address: '西湖区湖底公园1号'
        }, {
            key: '4',
            name: '佟丽娅',
            age: 30,
            address: '西湖区湖底公园1号'
        }
        ]
    }

    render() {
        return (
            <Lists listData={this.state.listData} editHandle={this.editHandle}/>
        )
    }
}
