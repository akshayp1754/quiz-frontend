import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Category from "./Category";
import Form from "./Comprehension";
import UploadImage from "./UploadImage";
// import ClozeQuestion from "./ClozeQuestion";
import QuestionCreator from "./QuestionCreator";
import DynamicInputs from "./Category";

function Home() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  useEffect(() => {
    const user = localStorage.getItem("User");
    if (!user) {
      navigate("/login");
    }
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-3xl flex justify-center mt-3">Test with Confidence, Succeed with Ease</h1>
      <span
          
          className="px-4 py-2 float-right mr-60 mt-14 mb-1000 bg-red-900 text-white rounded"
        >
          <Link to="/test">Take the Test</Link>
        </span>

      <div className="mt-2 flex ml-40 min-h-full  flex-col justify-center px-3 py-12 lg:px-8">
        <select
          name="question type"
          onChange={handleSelectChange}
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
        >
          <option value="">Select Question Type</option>
          <option value="comprehension"> comprehension</option>
          <option value="category">Category</option>
          <option value="questioncreator">Cloze Question</option>
        </select>
        {selectedOption === "category" && <Category />}
        {selectedOption === "comprehension" && <Form />}
        {selectedOption === "questioncreator" && <QuestionCreator />}

        
      </div>

        
      

    </>
  );
}

export default Home;
