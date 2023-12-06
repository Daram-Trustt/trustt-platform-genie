import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import router from "./Config/Routes";
import store from "./Config/Store";
import { ThemeProvider } from "@mui/material/styles";
import "./Config/i18n";
import Layout from "./Pages/Layout";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Layout>
          <RouterProvider router={router} />
        </Layout>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
