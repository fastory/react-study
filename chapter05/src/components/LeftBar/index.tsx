import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;
import { Link } from 'react-router-dom';


export default class LeftBar extends React.Component {
    render() {
        return (
            <Sider width={200} style={{minHeight: '100vh', background: '#fff' }}>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="0"><Icon type="desktop" /><Link to="/todo" style={{display:'inline-block'}}>待办</Link></Menu.Item>
                </Menu>
            </Sider>
        );
    }
}


