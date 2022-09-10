import { useNavigate } from "react-router-dom";

const product: {
  tags: string[];
  details: {
    title: string;
    description: string;
  };
  role: [number, string]; //tuple type exactly two elements for ((****fixed lenght****))
} = {
  tags: ["offer", "new"],
  details: {
    title: "Carpet",
    description: "A great",
  },
  role: [2, "role"],
};

//checked text in condition like utils=>enums=> in bitycle project
//enum is key word
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "AUTHOR",
}

const person = {
  name: "mahsa",
  last: "malmir",
  age: 22,
  hobbies: ["sport", "cookies"],
  roles: Role.READ_ONLY,
};

let favSctivities: any[];
favSctivities = [1, "sport1", "sport2"];
console.log(favSctivities, "favSctivities");

const ObjectType = () => {
  const navigate = useNavigate();

  for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); !!! ERROR !!!
  }

  //nested objects
  console.log(product, "product");

  if (person.roles === Role.READ_ONLY) {
    console.log("is Read Only");
  }
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
