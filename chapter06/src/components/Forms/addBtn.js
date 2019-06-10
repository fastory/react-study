import React from 'react';
import { Button } from 'antd';

const styleObj={margin:'20px 0'}
export default ({ addUser }) => (
  <div style={styleObj}>
    <Button type="primary" onClick={addUser}>
      增加用户
    </Button>
  </div>
);