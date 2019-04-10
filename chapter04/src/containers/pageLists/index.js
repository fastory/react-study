import React, { Component } from 'react';
import Lists from '../../components/lists';
import AddBtn from '../../components/Forms/addBtn';
import AddUserModel from '../../components/Lists/addUserModel';
import { connect } from 'react-redux'
import { addUser , delUser } from '../../actions/user'

 class PageLists extends Component {

    componentDidMount =()=>{
        this.setState({
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
        })
    }
    deleteUser = (record) => {
        this.props.delUser(record.key);
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
        const listData = this.props.listData ? this.props.listData: [];
        let lastKey=0;
        if (listData.length!=0){
            lastKey = listData[listData.length - 1].key;   
        }
        let obj = Object.assign(values, {
            key: lastKey + 1,
            age: Number.parseInt(values.age),
            address: values.address.join("").toString()
        })
        this.props.addUser(obj);
        this.setState({
            visible: false
        })
    }
    state = {
        visible: false
    }
    render() {
        return (
            <div>
                <AddBtn addUser={this.addUserModel} />
                <AddUserModel visible={this.state.visible} closeModel={this.closeModel} addUserAction={this.addUserAction} />
                <Lists listData={this.props.listData} deleteUser={this.deleteUser} />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    listData: state.listData
})

const mapDispatchToProps = dispatch => ({
    addUser: record => {
        dispatch(addUser(record));
    },
    delUser: id => {
        dispatch(delUser(id));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PageLists)
