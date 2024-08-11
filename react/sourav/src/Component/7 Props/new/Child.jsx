import React from "react";

const Child = (props) => {
  // console.log(props.count)
  let { count, data } = props;

  return (
    <div>
      Child
      <h1>my fav number {count}</h1>
      <h1>we are going to {data}</h1>
    </div>
  );
};

export default Child;
