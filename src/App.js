import Category from "./Category";
import Form from "./Comprehension";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Home";
import Test from "./Test";
import Registration from "./login/Registration";
import Signin from "./login/Signin";
import ClozeQuestion from './QuestionCreator'
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
    },
    {
      path: "/login",
      element: <Signin></Signin>,
    },
    {
      path: "/signup",
      element: <Registration></Registration> ,
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
      path: "/clozequestion",
      element: <ClozeQuestion></ClozeQuestion>,
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
