import React, {Component} from "react";
import {Table} from 'antd';

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
        <span>
        <a href="javascript:;" onClick={this.editHandle()}>编辑 {record.name}</a>
        |
        <a href="javascript:;">删除</a>
      </span>
    ),
}];

export default class Lists extends Component {
    render() {
        const { listData} = this.props;
        return (
            <Table dataSource={listData} columns={columns}/>
        )
    }
}
