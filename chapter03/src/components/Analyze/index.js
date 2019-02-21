import React, { Component } from 'react';
import { Card, Row, Col, Icon } from 'antd';
import Charts from '../Charts';
import styles from './index.scss';

export default class Analyze extends Component {
    render() {
        return (
            <div>
                <div className={styles.cards}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Card title="我是一个卡片" bodyStyle={{ padding: 10 }}>
                            <p className={styles.p1}><Icon type="appstore" theme="filled" />卡片市场</p>
                            <p className={styles.p1}><Icon type="file-word" theme="filled" />卡片文字</p>
                            <p className={styles.p1}><Icon type="credit-card" theme="filled" />信用卡</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="我是第二个卡片"  bodyStyle={{ padding: 10 }}>
                            <p className={styles.p1}><Icon type="home" theme="filled" />首页</p>
                            <p className={styles.p1}><Icon type="tag" theme="filled" />笔记</p>
                            <p className={styles.p1}><Icon type="video-camera" theme="filled" />摄像机</p>
                        </Card>
                    </Col>
                </Row>
                </div>
                <Charts />
            </div>
        );
    }
}
