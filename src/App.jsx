import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/main";
import Contacts from "./pages/contacts";
import About from "./pages/about";
import Wrapper from "./pages/wrapper";
import Contact from "./pages/contact";
import { CONTACTS } from "./util";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: "contacts",
        element: <Contacts />,
        loader: async () => {
          return {
            contacts: new Promise((resolve) => {
              setTimeout(() => {
                resolve(CONTACTS);
              }, 2000);
            }),
          };
        },
        children: [
          {
            path: ":id",
            element: <Contact />,
          },
        ],
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
