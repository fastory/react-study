import React, { Component } from 'react';
import { Button } from 'antd';

// export default class AddBtn extends Component {
//     render() {
//         const styleObj={
//             margin:'20px 0'
//         }
//         return (
//             <div style={styleObj}>
//                 <Button type="primary" onClick={this.props.addUser}>增加用户</Button>
//             </div>
//         );
//     }
// }
const styleObj={margin:'20px 0'}
export default ({ addUser }) => (
  <div style={styleObj}>
    <Button type="primary" onClick={addUser}>
      增加用户
    </Button>
  </div>
);