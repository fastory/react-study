import React, { Component } from 'react';
import {
  Layout
} from 'antd';
import Top from './components/Top'
import LeftBar from './components/LeftBar'
import Buttons from './components/Buttons'
import { WrappedRegistrationForm } from './components/Forms'
import Title from './components/Titles'
import Detail from './components/Detail'
const { Content } = Layout;


export default class App extends Component {
  render() {
    return (
      <Layout>
        <Top></Top>
        <Layout>

          <LeftBar></LeftBar>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content style={{
              background: '#fff', padding: 24, margin: 0, minHeight: 280,
            }}
            >
              <Title name='我是自定义内容的title' />
              <Detail />
              <Title name='我是引用antd的表单' />
              <WrappedRegistrationForm />
              <Title name='我是引用antd的按钮组合' />
              <Buttons></Buttons>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
