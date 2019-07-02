import React, { Component } from "react";
import AddUserForm from "../../components/Forms";
import { connect } from "react-redux";
import { addUser } from "../../actions/user";
import { message } from "antd";

@connect(
  state => ({
    users: state.users
  }),
  {
    addUser
  }
)
export default class extends Component {
  addUserAction = values => {
    const userLists = this.props.users ? this.props.users : [];
    let lastKey = 0;
    if (userLists.length != 0) {
      lastKey = userLists[userLists.length - 1].key;
    }
    let obj = Object.assign(values, {
      key: lastKey + 1,
      age: Number.parseInt(values.age),
      address: values.address.join("").toString()
    });
    this.props.addUser(obj);
    message.success("提交成功");
  };
  render() {
    return (
      <div>
        <AddUserForm addUserAction={this.addUserAction} />
      </div>
    );
  }
}
