import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./Config/Routes";
import store from "./Config/Store";
import "./Config/i18n"

function App() {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>

  );
}

export default App;
