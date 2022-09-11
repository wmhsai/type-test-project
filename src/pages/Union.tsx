import { useState } from "react";

const Union = () => {
  const [data, setData] = useState<string | number>();
  function calender(num1: number | string, num2: number | string) {
    let res;
    if (typeof num1 === "number" && typeof num2 === "number") {
      res = num1 + num2;
    } else {
      res = num1.toString() + num2.toString();
    }
    return setData(res);
  }

  return (
    <div>
      <button onClick={() => calender(12, 4)} className="btn">
        number
      </button>
      <button onClick={() => calender("12", "4")} className="btn">
        string
      </button>
      <div className="data">{data}</div>
    </div>
  );
};

export default Union;
