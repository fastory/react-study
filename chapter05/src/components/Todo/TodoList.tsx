import * as React from 'react'
import { List } from "antd";

interface TodoProps{
  todos: Array<object>;
  complete?: (id: number) => void;
}

export default class TodoList extends React.Component<TodoProps,any> {
  render () {
    const data= this.props.todos;
    return (
      <List
        bordered
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: any) => (
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