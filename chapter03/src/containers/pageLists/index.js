import React, { Component } from 'react';
import Lists from '../../components/lists';
import AddBtn from '../../components/Forms/addBtn';
import AddUserModel from '../../components/Lists/addUserModel';
import emitter from '../../util/event';

export default class PageLists extends Component {
    deleteUser = (record) => {
        const listData = [...this.state.listData];
        this.setState({
            listData: listData.filter(item => item.key !== record.key)
        })
    }
    addUserModel = () => {
        this.setState({
            visible: true
        })
    }
    closeModel = () => {
        this.setState({
            visible: false
        })
    }
    addUserAction = (values) => {
        let listData = [...this.state.listData];
        let obj = Object.assign(values, {
            key: listData[listData.length - 1].key + 1,
            age: Number.parseInt(values.age),
            address: values.address.join("").toString()
        })
        listData.push(obj);
        this.setState({
            listData: listData,
            visible: false
        })
    }
    componentDidMount() {
        // 组件装载完成以后声明一个自定义事件
        emitter.addListener('addUser', (message) => {
            console.log("监听事件的更新", message);
        });
    }
    componentWillUnmount() {
        emitter.removeListener('addUser', function () {
            console.log("移除绑定的on事件")
        });
    }
    state = {
        visible: false,
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
            <div>
                <AddBtn addUser={this.addUserModel} />
                <AddUserModel visible={this.state.visible} closeModel={this.closeModel} addUserAction={this.addUserAction} />
                <Lists listData={this.state.listData} deleteUser={this.deleteUser} />
            </div>
        )
    }
}
