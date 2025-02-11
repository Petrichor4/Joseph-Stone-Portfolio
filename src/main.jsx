import ReactDom from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from './components/ui/provider.jsx'

import "./index.css";

import App from "./App.jsx";
import AboutMe from "./pages/aboutMe";
import ErrorPage from "./pages/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
    ],
  },
]);

ReactDom.createRoot(document.getElementById("root")).render(
  <Provider>
    <RouterProvider router={router} />
  </Provider>
);
