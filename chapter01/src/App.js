import React, { Component } from 'react';

class Title extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <h2>{this.props.title}</h2>
    )
  }
}


class Test extends Component {
  constructor(props) {
    super(props)
    this.state = { company: '京东' }
  }
  render() {
    return (
      <div>我的名字是{this.props.name}公司名称是{this.state.company}</div>
    )
  }
}

class Lists extends Component {
  constructor() {
    super()
    this.state = {
      arr: [
        { name: '北京' },
        { name: '上海' },
        { name: '广州' },
        { name: '深圳' }
      ]
    };
  }
  render() {
    const { arr } = this.state;
    return (
      <ul>
        {
          arr.map((item, index) =>
            <li key={index}>地址:{item.name}</li>
          )
        }
      </ul>
    )
  }
}


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>hello, world---第一章</h1>
        <Title title='我是列表' />
        <Lists />
        <Title title='我是传入的参数' />
        <Test name="fastory" />
      </div>
    );
  }
}
