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
                    <Menu.Item key="0"><Icon type="desktop" /><Link to="/" style={{display:'inline-block'}}>首页</Link></Menu.Item>
                    <SubMenu key="sub1" title={<span><Icon type="pie-chart" />数据分析</span>}>
                        <Menu.Item key="1"><Link to="/charts">分析页</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/pageMonitor">监控页</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" title={<span><Icon type="laptop" /> 用户</span>}>
                        <Menu.Item key="3"><Link to="/lists">用户列表</Link></Menu.Item>
                        <Menu.Item key="4"><Link to="/addUser">用户管理</Link></Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" title={<span><Icon type="notification" />个人页</span>}>
                        <Menu.Item key="5"><Link to="/personal">个人中心</Link></Menu.Item>
                        <Menu.Item key="6"><Link to="/todo">代办事项</Link></Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
        );
    }
}


