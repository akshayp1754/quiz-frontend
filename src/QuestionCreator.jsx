import React, { useState } from "react";
import axios from "axios";

const QuestionCreator = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [blankWords, setBlankWords] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [option1, setOption1] = useState("")
  const [option2, setOption2] = useState("")
  const [option3, setOption3] = useState("")
  const [selectedWord, setSelectedWord] = useState()
  const [questionText, setQuestionText] = useState()
  const handleWordSelect = () => {
    const selectedText = window.getSelection().toString();
    if (selectedText && !blankWords.includes(selectedText)) {
      setBlankWords([...blankWords, selectedText]);
      setOptions([
        ...options,
        { label: String.fromCharCode(65 + options.length), text: selectedText },
      ]);
    }
  };

  const handleOptionChange = (optionLabel, text) => {
    setOptions(
      options.map((option) =>
        option.label === optionLabel ? { ...option, text } : option
      )
    );
  };

  const handleOptionSelect = (optionLabel) => {
    setSelectedOption(optionLabel);
    setSelectedWord(optionLabel)
  };

  const getPreviewText = () => {
    const ques= question
      .split(" ")
      .map((word, index) => (
        <span key={index}>
          {blankWords.includes(word) ? <span>__ </span> : <span >{word} </span>}
        </span>
        
      ));  
  };

  const handleSaveToMongo = () => {
    const data = {
      questionText,
      option1,
      option2,
      option3,
      selectedWord: selectedWord,
    };
console.log(data);
    axios
      .post("http://localhost:8080/clozequestion", {data})
      .then((response) => {
        // Handle the response if needed
        console.log("Data saved to MongoDB successfully!", response.data);
      })
      .catch((error) => {
        console.error("Error saving data to MongoDB:", error);
      });
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm"></div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <form className="space-y-6"  > */}
          <div>
            <label
              htmlFor="preview"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Preview
            </label>
            <div className="mt-2">
              {/* <input
                  id="preview"
                  name="preview"
                  type="text"
                  {getPreviewText()}
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />  */}

              <p 
              
               className="block w-full  rounded-md border-0 py-2 px-3  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                {getPreviewText()}
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Enter your Question
            </label>
            <div className="mt-2">
              <input
                id="question"
                name="question"
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <button
              onClick={handleWordSelect}
              className="flex mt-2 mb-3 justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-white-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Underline Selected Words
            </button>
          </div>

          {/* {options.map((option) => (
            <div key={option.label}>
              {option.label}:
              <input
                type="radio"
                name="correctOption"
                value={selectedWord}
                // checked={selectedOption === option.label}
                onChange={(e) => setSelectedWord(e.target.value)}
                className="form-radio text-indigo-600 h-5 w-5 ml-2 "
              />
              <input
                type="text"
                value={option.text}
                onChange={(e) =>
                  handleOptionChange(option.label, e.target.value)
                }
                className="w-40 mb-3 px-2 py-1 border rounded ml-2"
              />
            </div>
          ))} */}

            
            <span>correct Answer</span>
          <div className="inline-flex items-center">
            <label className="mr-2 mb-2">
              <input
                id="radio 4"
                type="radio"
                defaultChecked={true}

                className="form-radio text-indigo-600 h-5 w-5 ml-2 "
                name="radioGroup"
              /> 
            </label>
            <input
              type="text"
              onChange={(e)=>setSelectedWord(e.target.value)}
              id="input 4"
              className="block w-40 mb-2 rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          
          <div className="inline-flex items-center">
            <label className="mr-2 mb-2">
              <input
                id="radio 4"
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5 ml-2 "
                name="radioGroup"
              />
            </label>
            <input
              type="text"
              onChange={(e)=>setOption1(e.target.value)}
              id="input 4"
              className="block w-40 mb-2 rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="inline-flex items-center">
            <label className="mr-2 mb-2">
              <input
                id="radio 4"
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5 ml-2 "
                name="radioGroup"
              />
            </label>
            <input
              type="text"
              id="input 4"
              onChange={(e)=>setOption2(e.target.value)}
              className="block w-40 mb-2 rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="inline-flex items-center">
            <label className="mr-2 mb-2">
              <input
                id="radio 4"
                type="radio"
                className="form-radio text-indigo-600 h-5 w-5 ml-2 "
                name="radioGroup"
              />
            </label>
            <input
              type="text"
              id="input 4"
              onChange={(e)=>setOption3(e.target.value)}
              className="block w-40 mb-2 rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

          <button
            type="submit"
            onClick={handleSaveToMongo}
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save to mongo
          </button>

          {/* <div>
              <button
                type="submit"
                onClick={handleWordSelect}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div> */}
          {/* </form> */}
        </div>
      </div>
    </>
  );
};

export default QuestionCreator;
