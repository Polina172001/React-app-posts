import { Navigate, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route exact path="/posts" element={<Posts />} />
      <Route exact path="/posts/:id" element={<PostIdPage />} />
      <Route path="*" element={<Navigate to="/posts" />} />
    </Routes>
  );
};

export default AppRouter
