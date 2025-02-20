import React from "react";

const trainingPrograms = [
  ["IELTS", "Spoken English"],
  ["TOEFL", "SAT"],
  ["GRE", "DUOLINGO"],
  ["German", "French"],
];

const TrainingComponents = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Virtual / Online Live Trainings
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {trainingPrograms.flat().map((program, index) => (
          <div
            key={index}
            className="bg-purple-700 text-center py-6 px-8 rounded-xl text-xl font-semibold shadow-lg transition-transform transform hover:scale-105 hover:shadow-purple-500/50"
          >
            {program}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingComponents;
