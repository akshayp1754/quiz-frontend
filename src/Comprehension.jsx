import React, { useState } from "react";
import axios from "axios";

function Form() {

  const [inputFields, setInputFields] = useState([{ value: '', id: 1 }]);
  const [radioChecked, setRadioChecked] = useState(false);

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleRadioChange = () => {
    setRadioChecked(!radioChecked);
  };

  const handleAddInput = () => {
    setInputFields([...inputFields, { value: '', id: inputFields.length + 1 }]);
  };

  const handleRemoveInput = (index) => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };

          // up
const [input, setInput] = useState({
  passage : '',
  questionTitle : '',
  questionText : '',
  // radioGroup: false,
  option : '',

})


function handleChange(e) {
  const {name, value} = e.target

 

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
                  rows={3}
                  className="block w-full resize-y  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  
                />
              </div>
            </div>

            <div>
              <label className="block mt-28 text-sm font-medium leading-6 text-gray-900">
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

          
            <div>
      {inputFields.map((input, index) => (
        <div key={input.id} className="inline-flex items-center">
          <label className="mr-2 mb-2">
            <input
              type="radio"
              className="form-radio text-indigo-600 h-5 w-5 ml-2 "
              name="radioGroup"
              checked={radioChecked}
              onChange={handleRadioChange}
            />
          </label>
          <input
            type="text"
            value={input.value}
            onChange={(event) => handleInputChange(index, event)}
            className="block w-40 mb-2 rounded-md border py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          {index !== 0 && (
            <button type="button" onClick={() => handleRemoveInput(index)} className="">
              
            </button>
          )}
        </div>
      ))}
      <button type="button" onClick={handleAddInput} className="mt-2 ml-2">
        Add 
      </button>
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
