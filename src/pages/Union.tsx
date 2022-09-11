import { useState } from "react";

const Union = () => {
  const [data, setData] = useState<string | number>();
  enum Types { //enum type
    IS_NUMBER = "is_num",
    IS_STRING = "is_str",
  }
  type Literal = Types.IS_NUMBER | Types.IS_STRING; //aliases types
  type Union = number | string;

  //third param is type literal
  function calender(num1: Union, num2: Union, type: Literal): any {
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

  function testVoid(): void {
    //void type work without return
  }
  function testUndefined(): undefined {
    //undefined type doen't work without return
    return;
  }

  console.log(testVoid, "testVoid");
  console.log(testUndefined, "testUndefined");

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
