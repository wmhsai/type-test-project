import React, { useState } from "react";

const Test = () => {
  const [data, setData] = useState<number>();
  function add(num1: number, num2: number) {
    //specify type
    return setData(num1 + num2);
  }
  return (
    <div>
      <button onClick={() => add(1, 2)} className="btn">
        ADD
      </button>
      {/*without this in onClick ()=> we have error*/}
      <div className="data">{data}</div>
    </div>
  );
};

export default Test;
