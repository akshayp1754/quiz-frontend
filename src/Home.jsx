import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Category from "./Category";
import Form from "./Comprehension";
import Registration from "./login/Registration";
import UploadImage from "./UploadImage";


function Home() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
   const user = localStorage.getItem("User");
    if(!user){
      navigate("/login");
    }
  },[])

  return (
    <>
      <Navbar />
      

      
      <div className="mt-2 ">
        <select
          name="question type"
          onChange={handleSelectChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">Select Question Type</option>
          <option value="comprehension"> comprehension</option>
          <option value="category">Category</option>
        </select>
      {selectedOption === 'category' && <Category/>}
      {selectedOption === 'comprehension' && <Form/>}
      </div>

      
      {/* <Footer/> */}
      
      <UploadImage></UploadImage>
    </>
  );
}

export default Home;