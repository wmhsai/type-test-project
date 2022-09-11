const FunctionType = () => {
  function Calender(a: number, b: number, cb: (num: number) => any) {
    const res = a + b;
    return cb(res);
  }
  let sum: (a: number, b: number, cb: (num: number) => void) => number;
  sum = Calender;
  return <div className="data">{sum(2, 4, () => {})}</div>;
};

export default FunctionType;
