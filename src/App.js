import Category from "./Category";
import './App.css'
import Comprehension from "./Comprehension";
import Form from "./Form";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/comprehension",
      element: <Form></Form>,
    },
    {
      path: "/category",
      element: <Category></Category>,
    },
    {
      path: "/test",
      element: <Test></Test>,
    },
  ]);
  
  return (
    
    <RouterProvider router={router} />
    
  );
}

export default App;
