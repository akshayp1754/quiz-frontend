import React, {useState} from "react";

function Form() {

  const [radioButtons, setRadioButtons] = useState([{ id: 1, value: 'option1' }]);
  const [textInputValue, setTextInputValue] = useState('');

  const handleInputChange = (event) => {
    setTextInputValue(event.target.value);
  };

  const handleAddRadioButton = () => {
    const newId = radioButtons.length + 1;
    const newRadioButtons = [...radioButtons, { id: newId, value: `option${newId}` }];
    setRadioButtons(newRadioButtons);
  };


  
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Question
              </label>
              <div className="mt-2 w-auto">
                <input
                  id="comprehensionQue"
                  name="comprehension"
                  type="text"
                  placeholder="Type your passage here (optional)"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block mt-52 text-sm font-medium leading-6 text-gray-900">
                Question
              </label>
              <div className="mt-2 w-auto">
                <input
                  id="mcq"
                  name="questionTitle"
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
                  value="option1"
                />
              </label>

              <input
                type="text"
                className="ml-4 rounded-md border-2 border-gray-300 py-1 px-2 text-gray-900 focus:ring focus:ring-indigo-600"
                placeholder="Enter text..."
              />
            </div>
            <div className="flex items-center">
      {radioButtons.map((radioButton) => (
        <label key={radioButton.id} className="inline-flex items-center">
          <input
            type="radio"
            className="form-radio text-indigo-600 h-5 w-5"
            name="radioGroup"
            value={radioButton.value}
          />
          <span className="ml-2">{radioButton.value}</span>
        </label>
      ))}

      <input
        type="text"
        className="ml-4 rounded-md border-2 border-gray-300 py-1 px-2 text-gray-900 focus:ring focus:ring-indigo-600"
        placeholder="Enter text..."
        value={textInputValue}
        onChange={handleInputChange}
      />

      <button
        className="ml-4 py-1 px-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleAddRadioButton}
      >
        Add 
      </button>
    </div>

   

            
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;
