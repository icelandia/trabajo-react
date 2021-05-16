import React from "react";


const inputField = ({}) =>{

  return (
    //<input type={"text"} label={label}className={"InputField"}></input>
    <form onSubmit={this.handleSubmit}>
    <label>
      Name:
      <input type="text" value={this.state.value} onChange={this.handleChange} />
    </label>
    <input type="submit" value="Submit" />
  </form>
    );
}

/*<form>
  <input type={"text"} name= {_name}></input>
  </form>*/
  

//<input type="text" value={this.state.value} onChange={this.handleChange} />


export default inputField;
