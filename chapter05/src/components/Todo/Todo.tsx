import * as React from 'react';

export interface Props {
  completed: string;
  text: string;
  onClick?: () => void;
}
function Todo({ onClick, completed, text }:Props){
  return (
    <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
  )
}

export default Todo
