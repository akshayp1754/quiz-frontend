import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

function Category() {
  const [inputDescription, setInputDescription] = useState({ description: '' });


    const handleChange = (e) => {
      const value = e.target.value;
      setInputDescription({ description: value });
      console.log(value);       
      
    };

    function handleClick(e) {
      e.preventDefault()
      const newCategory = {
        description: inputDescription.description
      }

      axios.post('http://localhost:8080/category', newCategory)
      
      Swal.fire(
        'Saved!',
        'Your response is submitted successfully',
        'success'
      )

    }

    const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

    const handleAddInput = () => {
      const newInputFields = [...inputFields];
      const newId = newInputFields.length + 1;
      newInputFields.push({ id: newId, value: '' });
      setInputFields(newInputFields);
    };
  
    const handleInputChange = (id, newValue) => {
      const updatedInputFields = inputFields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      );
      setInputFields(updatedInputFields);
    };


  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div className="container mx-auto p-4">
    
    <h1 className="text-3xl font-bold mb-4">Question 1</h1>
    <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="description"
                  value={inputDescription.description}
                  rows={3}
                  placeholder='Description(optional)'
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={handleChange}
                />
              </div>
              
            </div>


    <h3 className="text-xl font-bold mt-10 mb-4">Categories</h3>
    {inputFields.map((inputField) => (
      <div key={inputField.id} className="mt-2">
        <input
          type="text"
          name={`input-${inputField.id}`}
          id={`input-${inputField.id}`}
          value={inputField.value}
          onChange={(e) => handleInputChange(inputField.id, e.target.value)}
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    ))}
    <button
      onClick={handleAddInput}
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      +
    </button>
  </div>

        <div className='flex justify-end'>
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">Item</h1>
    {inputFields.map((inputField) => (
      <div key={inputField.id} className="mt-2">
        <input
          type="text"
          name={`input-${inputField.id}`}
          id={`input-${inputField.id}`}
          value={inputField.value}
          onChange={(e) => handleInputChange(inputField.id, e.target.value)}
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    ))}
    <button
      onClick={handleAddInput}
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      +
    </button>
  </div>
    <div className="container mx-auto p-4">
    <h1 className="text-3xl font-bold mb-4">belongs to</h1>
    {inputFields.map((inputField) => (
      <div key={inputField.id} className="mt-2">
        <input
          type="text"
          name={`input-${inputField.id}`}
          id={`input-${inputField.id}`}
          value={inputField.value}
          onChange={(e) => handleInputChange(inputField.id, e.target.value)}
          className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    ))}
    <button
      onClick={handleAddInput}
      className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      +
    </button>
  </div>
  
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
      </div>
  </>
  

   );
}

export default Category;
