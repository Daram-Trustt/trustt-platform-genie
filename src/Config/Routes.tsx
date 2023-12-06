import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Login from "../Pages/Login";
// import Layout from "../Pages/Layout";
import Home from "../Pages/Home";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="login" element={<Login />} />
      <Route path="home" element={<Home />} />
    </Route>
  )
);

export default router;
