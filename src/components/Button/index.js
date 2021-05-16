import React from "react";


const button = ({className, callback, title}) =>{

  return (
    <button className={className} onClick={callback}>{title}</button>
  );
}

export default button;
