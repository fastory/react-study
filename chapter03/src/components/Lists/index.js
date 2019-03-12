import React, { Component } from "react";
import { Modal,Table } from 'antd';




export default class Lists extends Component {
    deleteArticle=()=>{
        Modal.confirm({
            title: 'Confirm',
            content: '我是确认框',
            okText: '确认',
            cancelText: '取消',
            onOk:()=>{
                this.props.deleteArticle()
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
                <span onClick={this.deleteArticle}>删除{record.name}</span>
            ),
        }];
        const { listData } = this.props;
        return (
            <Table dataSource={listData} columns={columns} />
        )
    }
}
