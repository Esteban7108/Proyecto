import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Overview from "../Pages/Overview/Overview";
import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/overview" element={<Overview />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
