import React, { Component } from "react";
import { Button } from "antd";

// export default class FilterBtn extends Component {
//   render() {
//     const { arr } = this.props;
//     return (
//       <div style={{ marginTop: "20px" }}>
//         {arr.map((obj) => {
//           return (
//             <Button
//               key={obj.filter}
//               onClick={() => this.props.filterHandle(obj.filter)}
//             >
//               {obj.text}
//             </Button>
//           );
//         })}
//       </div>
//     );
//   }
// }


export const FilterBtn = ({ arr ,filterHandle}) => (
  <div style={{ marginTop: "20px" }}>
    {arr.map(obj => {
      return (
        <Button
          key={obj.filter}
          onClick={filterHandle(obj.filter)}>
          {obj.text}
        </Button>
      );
    })}
  </div>
);