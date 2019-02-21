import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import { Link } from 'react-router-dom';


export default class LeftBar extends Component {
    render() {
        return (
            <Sider width={200} style={{minHeight: '100vh', background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <SubMenu key="sub1" title={<span><Icon type="user" />开始</span>}>
                        <Menu.Item key="1"><Link to="/charts">分析页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/form">监控页</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" /> 列表</span>}>
                        <Menu.Item key="3"><Link to="/detail">用户列表</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/detail">文章列表</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />个人页</span>}>
                        <Menu.Item key="5"><Link to="/form">用户列表</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/buttons">文章列表</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}


