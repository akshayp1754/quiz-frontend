import React from 'react'

function Comprehension() {
  return (
    <>
      <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
        <h1 className="text-3xl font-bold mb-4">Question 2</h1>
    <div className="col-span-full">
              <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                About
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  placeholder='Description(optional)'
                  className="block w-1/2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
              
            </div>

        </div>
        </div>
        </form>
    </>
  )
}

export default Comprehension
