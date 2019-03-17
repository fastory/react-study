import React, {Component} from 'react';
import Lists from '../../components/lists';
import emitter from '../../util/event'; 

export default class PageLists extends Component {
    deleteUser = (record)=>{
       const listData = [...this.state.listData];
       this.setState({
        listData: listData.filter(item => item.key !== record.key) 
       })
    }
    componentDidMount() {
        // 组件装载完成以后声明一个自定义事件
        emitter.addListener('addUser', (message) => {
            console.log("监听事件的更新",message);
        });
    }
    componentWillUnmount() {
        emitter.removeListener('addUser',function(){
            console.log("移除绑定的on事件")
        });
    }
    state = {
        listData: [{
            key: 1,
            name: '刘亦菲',
            age: 28,
            email: '123@123.com',
            address: '西湖区湖底公园1号'
        }, {
            key: 2,
            name: '迪丽热巴',
            age: 26,
            email: '122@163.com',
            address: '西湖区湖底公园1号'
        }, {
            key: 3,
            name: '范冰冰',
            age: 25,
            email: '333@qq.com',
            address: '西湖区湖底公园1号'
        }, {
            key: 4,
            name: '佟丽娅',
            age: 30,
            email: '4545@163.com',
            address: '西湖区湖底公园1号'
        }
        ]
    }

    render() {
        return (
            <Lists listData={this.state.listData} deleteUser={this.deleteUser}/>
        )
    }
}
