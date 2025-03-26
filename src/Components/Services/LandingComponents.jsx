import React from "react";

const LandingComponents = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900  text-black py-10">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white mb-6">
        <span className="text-indigo-500">Post Landing</span> Services
      </h2>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-6xl mx-auto">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex h-[400px]">
          <img
            src="https://images.pexels.com/photos/2767767/pexels-photo-2767767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Landing Image"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 bg-[#1A1A2E] text-white p-6 flex items-center h-[400px]">
          <p className="text-lg leading-loose">
          We offer Pre-Departure Briefing.
            <br />
            Support in  Transferring the Tuition Fees.
            <br />
            Airport Pickup.
            <br />
            Arranging Accommodation.
            <br />
            Purchasing Health Insurance.
            <br />
            Arranging / Accommodation Booking.
            <br />
            Opening Overseas bank account.
          </p>
        </div>
      </div>

    </div>
  );
};

export default LandingComponents;
