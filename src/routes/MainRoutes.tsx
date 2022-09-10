import { Route, Routes } from "react-router-dom";
import ObjectType from "../pages/ObjectType";
import Test from "../pages/Test";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Test />} />
      <Route path="/ObjectType" element={<ObjectType />} />
    </Routes>
  );
};
export default MainRoutes;
