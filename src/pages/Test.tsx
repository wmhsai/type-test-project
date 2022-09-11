import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Test = () => {
  const navigate = useNavigate();
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

  //when we convert const to let want type ****
  let num1: number;
  num1 = 6;

  const num2 = 4;
  const showResults1 = true;
  //in boolean when we use let have error because properties always going to be false??

  const showResults2 = false;
  let phrase1: string;
  phrase1 = "sum is : ";
  const phrase2 = "sub is : ";
  return (
    <div>
      <button
        onClick={() => calender(num1, num2, showResults1, phrase1)}
        className="btn"
      >
        SUM
      </button>
      <button
        onClick={() => calender(num1, num2, showResults2, phrase2)}
        className="btn"
      >
        SUB
      </button>
      {/*without this in onClick ()=> we have error*/}
      <div className="data">{data}</div>
      <button
        onClick={() => {
          navigate("./ObjectType");
        }}
        className="btn"
      >
        ObjectType
      </button>
      <button
        onClick={() => {
          navigate("./Union");
        }}
        className="btn"
      >
        Union
      </button>
    </div>
  );
};

export default Test;
