import React, { Component } from 'react';
import { Card, Row, Col, Avatar } from 'antd';

export default class Personal extends Component {

  render() {
    return (
      <div style={{marginTop:'20px'}}>
        <div>
          <Avatar size={64} icon="user" />
        </div>
        <div style={{marginTop:'20px'}}>
          <Row gutter={24}>
            <Col span={10}>
              <Card
                size="small"
                title="个人信息"
                extra={<a href="#">More</a>}
                style={{ width: 280 }}
              >
                <p>管理员</p>
                <p>电话号码：66666</p>
                <p>邮箱：123@123.com</p>
              </Card>
            </Col>
            <Col span={10}>
              <Card
                size="small"
                title="用户管理权限"
                extra={<a href="#">More</a>}
                style={{ width: 280 }}
              >
                <p>增加</p>
                <p>编辑</p>
                <p>删除</p>
              </Card>
            </Col>
          </Row>
        </div>

      </div>
    );
  }
}