import React, { Component } from 'react'
import styles from './index.scss';

export default class Detail extends Component {
    state = {
        textVal: "人生如梦"
    };

    handleChange = (e) => {
        this.setState({ textVal: e.currentTarget.value })
    };

    render() {
        return (
            <div className='content'>
                <p className={styles.pTest}>hello,欢迎光临项目~后面的文字是state中定义的文本<span className={styles.span1}>{this.state.textVal}</span></p>
                <p className={styles.p2}>我是绿色的自定义提示错误信息</p>
                <p className={styles.p3}>我是蓝色的自定义样式</p>
                <p className={styles.p4}>PS:要想使用className={'{styles.p3}'}表达式的话，需要在css-loader中设置options.modules=true</p>
            </div>
        )
    }
}
