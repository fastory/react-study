import React  from "react";
import { Button } from "antd";

export default  ({ arr ,filterHandle}) => (
  <div style={{ marginTop: "20px" }}>
    {arr.map(obj => {
      return (
        <Button
          key={obj.filter}
          onClick={() => filterHandle(obj.filter)}>
          {obj.text}
        </Button>
      );
    })}
  </div>
);