import React from "react";

const UserInput = props => {
  return (
    <input onChange={props.onChange} type="text" value={props.currentname} />
  );
};
export default UserInput;
