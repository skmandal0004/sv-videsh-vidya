import React from 'react'

const TrainingComponents = () => {
  return (
    <div className="bg-indigo-500 py-10">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <h1 className="text-4xl font-bold text-black mb-6">TRAININGS</h1>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://static.wixstatic.com/media/11062b_19cecd12d9d0417c99f1c18d7ba17d77~mv2.jpg/v1/crop/x_0,y_234,w_5000,h_2865/fill/w_791,h_453,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Online%20Learning.jpg"
            alt="Virtual Training"
            className="rounded-lg w-[700px] h-auto"
          />
        </div>

        {/* Button for Free Demo */}
        <div className="mt-6">
          <button className="bg-white text-indigo-500 font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-100 transition duration-300">
            Click Here for Free Demo !
          </button>
        </div>
      </div>
    </div>
  )
}

export default TrainingComponents
