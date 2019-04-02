import React, { Component } from "react";
import { Button } from "antd";
import { VisibilityFilters } from '../actions'

export default class FilterBtn extends Component {
  render() {
    return (
      <div>
         <button type="primary">显示已完成</button>
         <button type="primary">显示全部</button>
         <button type="primary">显示未完成</button>
      </div>
    );
  }
}