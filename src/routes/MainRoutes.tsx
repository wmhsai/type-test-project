import { Route, Routes } from "react-router-dom";
import ObjectType from "../pages/ObjectType";
import Test from "../pages/Test";
import Union from "../pages/Union";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/ObjectType" element={<ObjectType />} />
      <Route path="/Union" element={<Union />} />
    </Routes>
  );
};
export default MainRoutes;
