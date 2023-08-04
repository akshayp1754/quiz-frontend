import React, { useState } from 'react';
import axios from 'axios';

const Category = () => {
  const [inputFields, setInputFields] = useState([{ value: '' }]);
  const [items, setItems] = useState('');

  const handleInputChange = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { value: '' }]);
  };

  const handleSaveToDatabase = () => {
    
    const dataToSave = {
      items,
      inputFields: inputFields.map((field) => field.value),
    };

    // Make the POST request to your backend API
    axios
      .post('http://localhost:8080/category', dataToSave)
      .then((response) => {
        console.log('Data saved successfully:', response.data);
      })
      .catch((error) => {
        console.error('Failed to save data:', error);
      });
  };

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex space-x-4 mt-10">
        <label htmlFor="items" className="w-24 ">Items:</label>
        <input
          type="text"
          id="items"
          value={items}
          onChange={(e) => setItems(e.target.value)}
          className=" px-2 py-1 border rounded"
          placeholder="Enter items..."
        />
      </div>
      
      {inputFields.map((inputField, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="text"
            value={inputField.value}
            onChange={(e) => handleInputChange(index, e)}
            className=" px-2 py-1 border rounded"
            placeholder="Type something..."
          />
          <select className="w-48 px-2 py-1 border rounded">
            {inputFields.map((field, optionIndex) => (
              <option key={optionIndex} value={field.value}>
                {field.value}
              </option>
            ))}
          </select>
        </div>
      ))}

      <div>
      <button
          onClick={handleAddField}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Add
        </button>
      </div>
      <div className="flex justify-end space-x-2">
        
        <button
          onClick={handleSaveToDatabase}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Save to Database
        </button>
      </div>
    </div>
  );
};

export default Category;
