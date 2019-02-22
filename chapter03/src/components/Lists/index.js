import React, { Component } from "react";
import { Table } from 'antd';


const dataSource = [{
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
];
  
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
  },{
    title: '操作',
    key: 'action',
    render: (text, record) => (
      <span>
        <a href="javascript:;">编辑 {record.name}</a>
        |
        <a href="javascript:;">删除</a>
      </span>
    ),
  }];
  
export default class Lists extends Component {
    render() {
        return(
            <Table dataSource={dataSource} columns={columns} />
        )
    }
}
