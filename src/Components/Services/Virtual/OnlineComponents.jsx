import React from "react";

const OnlineComponents = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">Online Training</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-3 text-lg max-w-2xl mx-auto">
            Get expert coaching with proven success strategies for GRE, TOEFL, and IELTS.  
            Join our interactive sessions and boost your scores.
          </p>
        </div>

        {/* Content Section */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Image */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7570755/pexels-photo-7570755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Online Training"
              className="rounded-lg shadow-xl w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-30 rounded-lg"></div>
          </div>

          {/* Right - Text Content */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg ">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h3>
            <p className="text-gray-700 dark:text-gray-400 mt-4">
              Our professional training sessions are tailored to maximize your performance. 
              Get access to the best resources, personalized feedback, and expert strategies.
            </p>

            <ul className="mt-6 space-y-3 text-gray-700 dark:text-gray-400">
              <li>✅ Individualized attention with small batch sizes</li>
              <li>✅ Internationally recognized curriculum</li>
              <li>✅ Regular monitoring and performance feedback</li>
              <li>✅ Exclusive Combo Offer: GRE + TOEFL Training</li>
            </ul>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md transition-all hover:bg-indigo-700">
                Explore Training
              </button>
              <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg shadow-md transition-all hover:bg-gray-300">
                View Schedule
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineComponents;
