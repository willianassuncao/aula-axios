import Home from "../pages/Home/index.jsx";
import NewPost from "../pages/NewPost/index.jsx";

import { Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new-post" element={<NewPost />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default AppRoutes;
