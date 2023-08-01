import React, { useState } from "react";
import axios from "axios";

function Form() {


const [input, setInput] = useState({
  passage : '',
  questionTitle : '',
  questionText : '',
  // radioGroup: false,
  option : '',

})


function handleChange(e) {
  const {name, value} = e.target

  // if (name === 'radioGroup') {
  //   // For the radio button, we need to convert the string value to a boolean
  //   setInput((prevData) => ({ ...prevData, [name]: value === 'true' }));
  // } else {
  //   setInput((prevData) => ({ ...prevData, [name]: value }));
  // }

  setInput(prevInput => {
    return{
      ...prevInput,
      [name] : value
    }
  })
}

function handleClick(e) {
  e.preventDefault()
  const newComprehensionQue = {
        passage : input.passage,
        questionTitle : input.questionTitle,
        questionText : input.questionText,
        // radioGroup : input.radioGroup,
        option : input.option,
  }

  axios.post('http://localhost:8080/comprehension', newComprehensionQue)
}

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#">
            <div>
              
              <div className="mt-2">
                <textarea
                  id="about"
                  name="passage"
                  onChange={handleChange}
                  value={input.passage}
                  type="text"
                  placeholder="Type your passage here (optional)"
                  rows={2}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
              </div>
            </div>

            <div>
              <label className="block mt-52 text-sm font-medium leading-6 text-gray-900">
                Question
              </label>
              <div className="mt-2 w-auto">
                <input
                  name="questionTitle"
                  onChange={handleChange}
                  value={input.questionTitle}
                  type="text"
                  placeholder="question Title(optional)"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2 w-auto">
                <input
                  id="mcq"
                  name="questionText"
                  onChange={handleChange}
                  value={input.questionText}
                  type="text"
                  placeholder="question Text"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="flex items-center">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  className="form-radio text-indigo-600 h-5 w-5"
                  name="radioGroup"
                  value={true}
                  checked={input.isSubscribed === true}
                  onChange={handleChange}
                  

                  

                />
              </label>

              <input
                type="text"
                name="option"
                onChange={handleChange}
                value={input.option}
                className="ml-4 rounded-md border-2 border-gray-300 py-1 px-2 text-gray-900 focus:ring focus:ring-indigo-600"
                placeholder="Enter text..."
              />
            </div>

  

            <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
          Cancel
        </button>
        <button
          type="submit"
          onClick={handleClick}
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
      


          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
