import { useNavigate } from "react-router-dom";

const product: {
  id: string;
  price: number;
  tags: string[];
  details: {
    title: string;
    description: string;
  };
} = {
  id: "abc1",
  price: 12.99,
  tags: ["great-offer", "hot-and-new"],
  details: {
    title: "Red Carpet",
    description: "A great carpet - almost brand-new!",
  },
};

const person: {
  name: string;
  last: string;
  age: number;
} = {
  name: "mahsa",
  last: "malmir",
  age: 22,
};

console.log(product, "product");

const ObjectType = () => {
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          navigate("../");
        }}
        className="btn"
      >
        Back!
      </button>
      <span>{person.name}</span>
      <span>{person.last}</span>
      <span>{person.age}</span>
    </>
  );
};

export default ObjectType;
