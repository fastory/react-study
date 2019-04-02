import React, { Component } from "react";
import { List } from "antd";

export default class TodoList extends Component {
  render () {
    const data = this.props.todos;
    return (
      <List
        bordered
        dataSource={data}
        renderItem={item => (<List.Item> {item.text}</List.Item>)}
      />
    );
  }
}