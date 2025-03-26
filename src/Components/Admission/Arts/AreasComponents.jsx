import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const areasData = [
  {
    category: "Arts",
    subjects: [
      "Animation", "Applied Arts - Printing, Studio Art", "Bakery and Pastry Arts",
      "Music", "Dance", "Theatre, Drama", "Visual Arts", "Liberal Arts and Studies",
      "Photography", "Fine Arts - Drawing, Painting, Sculpture",
      "Film, Cinematography, Interactive Media, Multimedia",
    ],
  },
  {
    category: "Design",
    subjects: [
      "Interior Design", "Carpentry, Woodworking, Blacksmithing, Goldsmithing, Silversmithing, Ceramics",
      "Fashion, Textile, Graphics, Product",
    ],
  },
  {
    category: "Humanities",
    subjects: [
      "Indigenous Studies", "Language and Literature", "Museum and Gallery Studies",
      "Philosophy, Aesthetics", "Religious Studies", "Theology", "Journalism and Broadcasting",
      "Advertising", "Media, Mass Communication", "Law - LLB, LLM",
      "Criminology, Forensic Science", "Legal Assistant, Court Support",
    ],
  },
  {
    category: "Life Sciences",
    subjects: [
      "Biochemistry", "Bioinformatics", "Biology, Biological Science", "Biomaterials",
      "Biomedical Sciences", "Biotechnology", "Agriculture, Forestry and Fishery",
      "Horticulture, Mariculture, Poultry, Dairy", "Genetics", "Hydrobiology", "Immunology",
      "Marine Biology", "Microbiology", "Neuroscience", "Oral Science",
      "Physiology", "Plant Taxonomy, Plant Science", "Zoology",
    ],
  },
];

const AreasComponents = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-12 px-4 md:px-8 lg:px-16 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            Subjects in Various Study Areas
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
            Explore diverse subjects in different academic fields.
          </p>
        </motion.div>

        {/* Study Areas */}
        {areasData.map((area, index) => (
          <motion.div
            key={index}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded-md shadow-sm inline-block">
              {area.category}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
              {area.subjects.map((subject, idx) => (
                <li
                  key={idx}
                  className="bg-white dark:bg-gray-800 p-3 shadow rounded-md text-gray-700 dark:text-gray-300 text-sm flex items-center transition-colors"
                >
                  <span className="mr-2 text-indigo-500">●</span> {subject}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AreasComponents;
