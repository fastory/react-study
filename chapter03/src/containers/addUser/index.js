import React, { Component } from 'react';
import AddUserForm from '../../components/Forms';
import emitter from '../../util/event';
import { message} from 'antd';

export default class AddUser extends Component {
    addUserAction = (values)=>{
        emitter.emit('addUser',values);
        message.success('更新成功');
    }
    render() {
        return (
            <AddUserForm addUserAction={this.addUserAction}/>
        )
    }
}
