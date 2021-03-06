import React, { Component } from 'react';
import {
  Layout
} from 'antd';
import Top from './components/Top'
import LeftBar from './components/LeftBar'
const { Content } = Layout;
import RouterMap from './router';
import { HashRouter as Router } from 'react-router-dom';
import './App.scss'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Top></Top>
          <Layout>
            <LeftBar></LeftBar>
            <Layout style={{ padding: '0 24px 24px' }}>
              <Content style={{
                background: '#fff', padding: 24, margin: 0, minHeight: 280,
              }}
              >
                <RouterMap />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </Router>
    );
  }
}
