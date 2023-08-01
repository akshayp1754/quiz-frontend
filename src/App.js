import Category from "./Category";
import './App.css'
import Comprehension from "./Comprehension";
import Form from "./Form";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";

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
  ]);
  
  return (
    // <div>
    //   {/* <Category></Category> */}
    //   {/* <Comprehension></Comprehension> */}
    //   <Form></Form>
    //   <div >
   //   </div>
    // </div>
    

    <RouterProvider router={router} />
    
  );
}

export default App;
