import "./App.css";
//import {BrowserRouter, Routes, Route, createBrowserRouter} from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import { createBrowserRouter, RouterProvider } from "react-router";

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
    path:"/",
    element: <Home />
  },
  {
    path: "/about",
    element: <About />
  },
  
  
]);

function App() {
  return (<RouterProvider router={router}/>)
}

export default App;