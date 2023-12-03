import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Consents from "../Pages/Consents";
import Login from "../Pages/Login";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/consents"
        Component={Consents}
      />
      <Route path="/Login" Component={Login} />
    </>
  )
);

export default router;
