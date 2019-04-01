import React, { Component } from "react";
import AddUserForm from "../../components/Forms";
import { message } from "antd";

export default class AddUser extends Component {
  render() {
    return (
      <div>
        <AddUserForm addUserAction={this.addUserAction} />
      </div>
    );
  }
}
