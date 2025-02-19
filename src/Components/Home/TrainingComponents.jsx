import React from "react";

const trainingPrograms = [
  ["IELTS", "Spoken English"],
  ["TOEFL", "SAT"],
  ["GRE", "DUOLINGO"],
  ["German", "French"],
];

const TrainingComponents = () => {
  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Virtual / Online Live Trainings
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16 justify-center items-center">
        {trainingPrograms.map((pair, index) => (
          <div key={index} className="flex flex-col gap-12">
            {pair.map((program, subIndex) => (
              <div
                key={subIndex}
                className="bg-purple-600 text-center py-6 px-6 rounded-lg text-lg font-semibold shadow-lg"
              >
                <span className="underline">{program}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingComponents;
