import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../pages/home/Home.page";
import Login from "../pages/authenticate/Login.page";
import Register from "../pages/authenticate/Register.page";
import Layout from "./Layout.app";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="home" element={<Home />} />

      <Route path="login" element={<Login />} />

      <Route path="register" element={<Register />} />
    </Route>
  )
)

export default router;