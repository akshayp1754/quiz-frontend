import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function Category() {
  const [inputDescription, setInputDescription] = useState({
    description: "",
    categories: "",
  });

  const [showForm, setShowForm] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputDescription({ description: value });
    console.log(value);
  };

  function handleClick(e) {
    e.preventDefault();
    const newCategory = {
      description: inputDescription.description,
      categories: inputDescription.categories,
    };

    axios.post("http://localhost:8080/category", newCategory);

    Swal.fire("Saved!", "Your response is submitted successfully", "success");
  }

  const [inputFields, setInputFields] = useState([{ id: 1, value: "" }]);

  const handleAddInput = () => {
    const newInputFields = [...inputFields];
    const newId = newInputFields.length + 1;
    newInputFields.push({ id: newId, value: "" });
    setInputFields(newInputFields);
  };

  const handleInputChange = (id, newValue) => {
    const updatedInputFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: newValue } : field
    );
    setInputFields(updatedInputFields);
  };

  const handleNewForm = () => {
    const newform = [...showForm, []];
    setShowForm(newform);
  };
  const [categories, setCategories] = useState([""]);

  const handleCategoryChange = (index, value) => {
    const updatedCategories = [...categories];
    updatedCategories[index] = value;
    setCategories(updatedCategories);
  };

  const handleAddNew = () => {
    setCategories([...categories, ""]);
  };

  const handleRemove = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  return (
    <>
      <div className="flex justify-center align-center">
        <div className=" flex flex-1 flex-col justify-center px-6 py-6 shadow-xl max-w-5xl rounded border-l-[8px] border-l-blue-400 m-10">
          <div className="container mx-auto">
            <h1 className="text-2xl font-bold mb-4">Question 1</h1>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="text-xl font-medium leading-6 text-gray-900"
              >
                About
              </label>
              <div className="mt-1">
                <textarea
                  id="about"
                  name="description"
                  value={inputDescription.description}
                  rows={3}
                  placeholder="Description(optional)"
                  className=" w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                  onChange={handleChange}
                />
              </div>
            </div>

            <h3 className="text-xl mt-10 mb-4">Categories</h3>
            {inputFields.map((inputField) => (
              <div key={inputField.id} className="mt-2">
                <input
                  type="text"
                  name={`input-${inputField.id}`}
                  id={`input-${inputField.id}`}
                  value={inputField.value}
                  onChange={(e) =>
                    handleInputChange(inputField.id, e.target.value)
                  }
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

          <div className="flex justify-end">
            <div className="container mx-auto p-4">
              <h1 className="text-xl mb-4">Item</h1>
              {inputFields.map((inputField) => (
                <div key={inputField.id} className="mt-2">
                  <input
                    type="text"
                    name={`input-${inputField.id}`}
                    id={`input-${inputField.id}`}
                    value={inputField.value}
                    onChange={(e) =>
                      handleInputChange(inputField.id, e.target.value)
                    }
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
              <h1 className="text-xl mb-4">belongs to</h1>
              {inputFields.map((inputField) => (
                <div key={inputField.id} className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option></option>
                    <option></option>
                    <option></option>
                  </select>
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
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={handleClick}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Save
            </button>
            <button
              type="submit"
              onClick={handleNewForm}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              add new
            </button>
          </div>
        </div>
      </div>
      {showForm.map((form) => {
        return <Category />;
      })}

      <div className="sm:col-span-2 sm:col-start-1">
        <label
          htmlFor="city"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="city"
            id="city"
            className="block  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </>
  );
}

export default Category;
