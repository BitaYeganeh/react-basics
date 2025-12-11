import "./App.css";
//import {BrowserRouter, Routes, Route, createBrowserRouter} from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "./Layout";
import ErrorPage from "./components/ErrorPage";
import Todos from "./components/Todos";
import SingleEmployee from "./components/SingleEmployee";
import Employees from "./components/Employees";
import FilterList from "./components/FilterList";
// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Home />,
      },
      {
        path: "/employees/:id",
        element: <SingleEmployee />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/employees",
        element: <Employees />,
      },
      {
        path: "/filterlist",
        element: <FilterList />,
      },

      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  // {
  //   path:"/",
  //   element: <Home />
  // },
  // {
  //   path: "/about",
  //   element: <About />
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
