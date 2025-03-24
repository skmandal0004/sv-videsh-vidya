import React from 'react'

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

  <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-md border-2  hover:border-black hover:bg-white hover:text-black transition duration-300">
    Online Training
  </button>

  <p className="text-gray-700 dark:text-gray-400  mt-5 max-w-md">
    Keep yourself up to date with our training timetable for the best preparation for your exams!
  </p>

  <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-md border-2 hover:border-black hover:bg-white hover:text-black transition duration-300">
  Training Time Table
</button>
</div>

          {/* Right Side - Image */}
          <div className="w-full md:w-1/2 mt-6 md:mt-0 ml-9">
            <img
              src="https://static.wixstatic.com/media/11062b_0a3b530212be445d8d3799c50adee2a8~mv2.jpg/v1/fill/w_721,h_445,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_0a3b530212be445d8d3799c50adee2a8~mv2.jpg"
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
