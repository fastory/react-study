import React, { Component } from 'react';
import { Card, Row, Col, Icon } from 'antd';
import Charts from '../Charts';
import styles from './index.scss';

export default class Analyze extends Component {
    render() {
        const { dataList, cols} = this.props
        return (
            <div>
                <div className={styles.cards}>
                <Row gutter={24}>
                    <Col span={8}>
                        <Card title="我是一个卡片" bodyStyle={{ padding: 10 }}>
                            <p className={styles.p1}><Icon type="appstore" theme="filled" style={{marginRight:10}} />菜单</p>
                            <p className={styles.p1}><Icon type="file-word" theme="filled" style={{marginRight:10}} />卡片文字</p>
                            <p className={styles.p1}><Icon type="credit-card" theme="filled"  style={{marginRight:10}}/>信用卡</p>
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="我是第二个卡片"  bodyStyle={{ padding: 10 }}>
                            <p className={styles.p1}><Icon type="home" theme="filled"  style={{marginRight:10}}/>首页</p>
                            <p className={styles.p1}><Icon type="tag" theme="filled"  style={{marginRight:10}}/>笔记</p>
                            <p className={styles.p1}><Icon type="video-camera" theme="filled"  style={{marginRight:10}}/>摄像机</p>
                        </Card>
                    </Col>
                </Row>
                </div>
                <Charts dataList={dataList} cols={cols}/>
            </div>
        );
    }
}
