import React from 'react'
import { Link } from "react-router-dom";

const TableComponents = () => {
  return (
    <div className="bg-white  dark:bg-gray-900 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Online Training Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-center flex flex-col items-center">
            <h2 className="text-4xl font-medium text-black dark:text-white">Online Training</h2>
            <p className="text-gray-700 dark:text-gray-400 mt-5 max-w-md">
              Check out our online training portal where we have a variety of materials to make your preparation hassle-free.
            </p>

            <Link to="https://training.svvideshvidya.com/">
            <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-md border-2 hover:border-black hover:bg-white hover:text-black transition duration-300">
              Online Training
            </button>
          </Link>

            <p className="text-gray-700 dark:text-gray-400  mt-5 max-w-md">
              Keep yourself up to date with our training timetable for the best preparation for your exams!
            </p>
            <Link to="/training-time-table">
            <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-md border-2 hover:border-black hover:bg-white hover:text-black transition duration-300">
              Training Time Table
            </button>
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 ml-9">
            <img
              src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Online Training"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TableComponents
