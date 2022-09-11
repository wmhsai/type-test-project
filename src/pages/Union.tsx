import { useState } from "react";

const Union = () => {
  const [data, setData] = useState<string | number>();

  enum Types {
    IS_NUMBER = "is_num",
    IS_STRING = "is_str",
  }
  //third param is literal and change if whit this
  //i write this with literal && union && enum
  function calender(
    num1: number | string,
    num2: number | string,
    type: Types.IS_NUMBER | Types.IS_STRING
  ) {
    let res;
    // if (typeof num1 === "number" && typeof num2 === "number") {
    //   res = num1 + num2;
    // } else {
    //   res = num1.toString() + num2.toString();
    // }
    if (type === Types.IS_NUMBER) {
      res = +num1 + +num2;
    } else {
      res = num1.toString() + num2.toString();
    }
    return setData(res);
  }

  return (
    <div>
      <button onClick={() => calender(12, 4, Types.IS_NUMBER)} className="btn">
        number
      </button>
      <button
        onClick={() => calender("12", "4", Types.IS_NUMBER)}
        className="btn"
      >
        num to str
      </button>
      <button
        onClick={() => calender("mahsa", "M", Types.IS_STRING)}
        className="btn"
      >
        string
      </button>
      <div className="data">{data}</div>
    </div>
  );
};

export default Union;
