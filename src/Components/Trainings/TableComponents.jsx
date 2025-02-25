import React from 'react'

const TableComponents = () => {
  return (
    <div className="bg-white py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Description */}
        <div className="text-black text-xl mb-1 ml-14 mt-5">
          <p>You can get professional online training sessions from expert tutors.</p>
          <p className=" mb-5">
          Get coached by dedicated team of professionals for GRE, TOEFL AND IELTS.Proven ability<br/> in getting scores for our students.
          </p>
          <p>Over 14,600 hours of training students from diverse backgrounds.</p>

          <ul className=" list-inside mt-5">
            <li>1.Shorter batch size(Individualised attention).</li>
            <li>2.Curriculum as per International standards.</li>
            <li>3.Consistent monitoring and feedback.</li>
            <li>4.Register with S V Videsh Vidya for Combo Offer GRE+TOEFL</li>
          </ul>
        </div>

        {/* Online Training Section */}
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side - Text */}
          <div className="w-full md:w-1/2 text-center flex flex-col items-center">
  <h2 className="text-4xl font-medium text-black">Online Training</h2>
  <p className="text-gray-700 mt-5 max-w-md">
    Check out our online training portal where we have a variety of materials to make your preparation hassle-free.
  </p>

  <button className="mt-6 bg-indigo-500 text-white px-6 py-3 rounded-md border-2  hover:border-black hover:bg-white hover:text-black transition duration-300">
    Online Training
  </button>

  <p className="text-gray-700 mt-5 max-w-md">
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
