import * as React from 'react'
import { Button } from "antd";


interface FilterProps {
  btns: Array<object>;
  filterHandle?:(filter:string)=>void;
}
export default class FilterBtn extends React.Component<FilterProps,any> {
  
  render() {
    const { btns } = this.props;
    return (
      <div style={{ marginTop: "20px" }}>
        {btns.map((obj:any) => {
          return (
            <Button
              key={obj.filter}
              onClick={() => this.props.filterHandle(obj.filter)}
            >
              {obj.text}
            </Button>
          );
        })}
      </div>
    );
  }
}
