import React from 'react'

const ArtsComponents = () => {
  return (
    <div className="flex flex-col items-center w-full bg-white">
      {/* Heading */}
      <div className="max-w-4xl w-full px-6 py-6">
        <h1 className="text-6xl font-bold text-gray-900 mb-4 leading-snug text-center mt-6">Arts, Sciences, Humanities <br/> and Other</h1>
      </div>

      {/* Image */}
      <div className="w-full bg-indigo-500 flex justify-center py-12">
        <img
          src="https://static.wixstatic.com/media/4e921d692e2c48698df56e377b80579c.jpg/v1/crop/x_0,y_357,w_4032,h_2310/fill/w_796,h_456,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Human%20Sketch.jpg"
          alt="Medical"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>

      <div className="max-w-4xl w-full px-6 py-10 text-gray-800">
        <p className="text-xl leading-loose mb-4">
        Prime destinations for arts and humanities overseas education for Indian students are US, Canada, UK, Singapore, Australia and New Zealand. Depending on the courses and budget, students can decide to pursue above courses from one of these countries. Indian students prefer to go to UK / USA / Canada / Australia for Medicine, Health and Health Care.
        </p>
        <p className="text-xl leading-loose mb-2">
        USA,  Canada, Australia , Singapore, Italy, France for Arts, Graphic design, Film making, Fashion, Culinary, Photography, Painting and Animation based courses; UK for Dance, Theater, Music and other courses; USA / UK/ Canada/ Australia fpr Personal Services and Education.
        </p>
      </div>

      <div className="max-w-4xl w-full px-6  text-gray-800">
        <h2 className="text-2xl font-normal text-gray-900 mb-4">
        Duration of Education:
        </h2>
        <p className="text-lg leading-relaxed mb-6">
        Most programs are 1 year to 3 year long. Post graduate students prefer to go for 1 -2 year programs whereas Undergraduate students pursue 2-3 year long courses along with Internships at various companies.
        </p>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">
        Cost of Education:
        </h2>
        <p className="text-lg leading-relaxed mb-6">
        The average cost of one year program ranges from INR 5lacs to INR 12lacs. Two-Three year programs can cost between INR 12 lacs to 30 lacs in total.
        </p>

        <h2 className="text-2xl font-normal text-gray-900 mb-4">
        Entry Requirements:
        </h2>
        <p className="text-lg leading-relaxed mb-6">
        English language requirements for Indian students is a must. Students may fulfill that through one of these tests.
        </p>
        </div>
    </div>
  )
}

export default ArtsComponents
