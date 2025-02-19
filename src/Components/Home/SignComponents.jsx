import React from "react";

const SignComponents = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit bg-gray-100 p-20">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-7 mt-4 text-center">
        SIGN UP FOR FREE PROFILE REVIEW
      </h2>

      {/* Input & Button Container */}
      <div className="flex items-center w-full max-w-xl">
      <input
           type="email"
           placeholder="Enter your email here *"
           className="w-5/6 px-4 py-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
           required
        />

  <button className="w-1/4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold rounded-r-lg">
    Sign Up
  </button>
</div>


    </div>
  );
};

export default SignComponents;
