import { useState } from "react";
const Test = () => {
  const [data, setData] = useState<string>();
  function calender(
    num1: number,
    num2: number,
    showResults: boolean,
    phrase: string
  ) {
    //specify type
    if (typeof num1 !== "number" && typeof num2 !== "number") {
      throw new Error(" wrong type babe !!");
    }
    const m = num1 + num2;
    const n = num1 - num2;
    if (showResults) {
      return setData(phrase + m);
    } else {
      return setData(phrase + n);
    }
  }
  return (
    <div>
      <button onClick={() => calender(6, 4, true, "sum is : ")} className="btn">
        SUM
      </button>
      <button
        onClick={() => calender(6, 4, false, "sub is : ")}
        className="btn"
      >
        SUB
      </button>
      {/*without this in onClick ()=> we have error*/}
      <div className="data">{data}</div>
    </div>
  );
};

export default Test;
