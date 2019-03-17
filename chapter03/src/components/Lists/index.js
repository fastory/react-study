import React, { Component } from "react";
import { Modal,Table } from 'antd';

export default class Lists extends Component {
    deleteUser=(record,event)=>{
        Modal.confirm({
            title: '我是确认框',
            content: '你确定想要删除${record.name}吗',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
                this.props.deleteUser(record)
            }
          }); 
    }
    render() {
        const columns = [{
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        }, {
            title: '住址',
            dataIndex: 'address',
            key: 'address',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <span onClick={this.deleteUser.bind(this,record)}>删除</span>
            ),
        }];
        const { listData } = this.props;
        return (
            <Table dataSource={listData} columns={columns} />
        )
    }
}
