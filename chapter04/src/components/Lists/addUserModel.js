import React, { Component } from 'react';
import { Modal } from 'antd';
import UserForm from '../Forms'

export default class AddUserModel extends Component {
    componentDidMount() {
        console.log("visible--"+this.props.visible)
    }
    render() {
        const { visible } = this.props;
        return (
            <Modal
                title="文章编辑"
                width="80%"
                visible={visible}
                okText='保存'
                footer={null}
                onCancel={this.props.closeModel}
            >
                <UserForm addUserAction={this.props.addUserAction} />
            </Modal>
        );
    }
}
