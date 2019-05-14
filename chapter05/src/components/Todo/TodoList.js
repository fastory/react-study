import React, { Component } from "react";
import { List } from "antd";

export default class TodoList extends Component {
  render () {
    const data = this.props.todos;
    return (
      <List
        bordered
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <List.Item
            actions={[
              <a
                onClick={() => this.props.complete(item.id)}
              >
                完成
              </a>
            ]}
          >
            <div style={{flex:1}}>{item.text}</div>
          </List.Item>
        )}
      />
    );
  }
}