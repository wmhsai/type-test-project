const FunctionType = () => {
  function Calender(a: number, b: number) {
    return a + b;
  }
  let sum: (a: number, b: number) => number; //function types
  sum = Calender;
  return <div className="data">{sum(2, 4)}</div>;
};

export default FunctionType;
