import React from "react";

const areasData = [
  {
    category: "Arts",
    subjects: [
      "Animation",
      "Applied Arts - Printing, Studio Art",
      "Bakery and Pastry Arts",
      "Music",
      "Dance",
      "Theatre, Drama",
      "Visual Arts",
      "Liberal Arts and Studies",
      "Photography",
      "Fine Arts - Drawing, Painting, Sculpture",
      "Film, Cinematography, Interactive Media, Multimedia",
    ],
  },
  {
    category: "Design",
    subjects: [
      "Interior Design",
      "Carpentry, Woodworking, Blacksmithing, Goldsmithing, Silversmithing, Ceramics",
      "Fashion, Textile, Graphics, Product",
    ],
  },
  {
    category: "Humanities",
    subjects: [
        "Indigenous Studies",
        "Language and Literature",
        "Museum and Gallery Studies",
        "Philosophy, Aesthetics",
        "Religious Studies",
        "Theology",
        "Journalism and Information ,Broadcasting",
        "Publishing",
        "Advertising",
        "Media, Mass communication, Technical comunication",
        "Law - LLB, LLM",
        "Criminology , Forensic Science, Justice and Emergency Services",
        "Legal Assistant, Court Support",
],
  },
  {
    category: "Life Sciences",
    subjects: [
        "Biochemistry",
        "Bioinformatics",
        "Biology, Biological Science",
        "Biomaterials",
        "Biomedical Sciences",
        "Biotechnology",
        "Agriculture, Forestry and Fishery",
        "Horticulture , Mariculture, Poultry, Dairy",
        "Genetics",
        "Hydrobiology",
        "Immunology",
        "Marine Biology",
        "Microbiology",
        "Neuroscience",
        "Oral Science",
        "Physiology",
        "Plant Taxanomy , Plant Science",
        "Zoology",
],
  },
  {
    category: "General Science",
    subjects: [
        "Astronomy, Astrophysics",
        "Atmospheric Sciences",
        "Chemistry",
        "Earth Sciences",
        "Geography",
        "Geology",
        "Geophysics",
        "Geospatial Science",
        "Lab Technician",
        "Meteorology",
        "Physics",
        "Mathematics and Statistics",
        "Actuarial Science",
    ],
  },
  {
    category: "Medicine, Health and Healthcare",
    subjects: [
      "Acupuncture",
      "Addiction and Mental Health",
      "Audiology - Speech, Speech Pathology, Speech Therapy",
      "Autism",
      "Cardiovascular Science",
      "Clinical Lab",
      "Communicative Disorder",
      "Dentistry, Dental Hygiene",
      "Dietetics, Nutrition",
      "Drug Development",
      "Fitness, Physical Activity",
      "Food Science, Food Science and Nutrition, Food Science and Technology, Wine Making, Brewery, Winery",
      "Health Psychology",
      "Kinesiology",
      "Medical Radiation Technology",
      "Medical Science",
      "Medical Technology",
      "Medicine",
      "Midwifery",
      "Nursing",
      "Occupational Therapy",
      "Optometry",
      "Paradmeic Studies",
      "Pharmaceutical Sciences, Pharmacy",
      "Physical Therapy, Physiotherapy",
      "Psychiatric Nursing",
      "Psychology",
      "Public Heath",
      "Radiologic Science",
      "Recreation",
      "Rehabilitation Assistant",
      "Respiratory Care",
      "Therapeutic Recreation",
      "Therapist Assistant",
      "Veterinary",
      "Animal Care",
      "Animal Conservation",
      "Animal Science",
      "Veterinary Science",
    ],
  },

  {
    category: "Education",
    subjects: [
        "Adult, Organisational Learning and Leadership",
        "Early Childhood Education, Primary Education ,Secondary Education",
        "Education - Assistance,  Counseling, Training",
        "Physical Education",
        "Reading",
        "Creative Writing",
        "Teacher Education Program",
    ],
},

{
    category: "Other Services",
    subjects: [
        "Aviation",
        "Culinary Skills",
        "Financial Services",
        "Hair Styling, Makeup, Cosmetics, Esthetic Services",
        "Hospitality, Culinary Arts, Travel and Tourism",
        "Massage Therapy",
        "Sports Science, Sports, Exercise",
        "Physical Sciences, Sciences",
        "Security Services",
        "Criminal Science, International Criminology",
        "Fire Science, firefighting, Fire and Safety",
        "Forensic Science",
        "Military",
        "Safety, Police and Public Safety",
        "Social and Behavioural Science",
        "Anthropology",
        "Archaeology",
        "Behavioral Sciences",
        "Cultural studies, Inter-cultural communication",
        "Economics",
        "Ethnic Studies",
        "Gerontology",
        "Human Ecology, Ecology",
        "Human Service",
        "International Relations",
        "Political Science",
        "Social Policy",
        "Sociology, Social Science",
        "Social Services",
        "Child Care, Child and Youth Worker, Child Care Development and Studies",
        "Community Development",
        "Developmental Service Worker",
        "Personal Support Work",
        "Social Work and NGO Related Fields",
        "Transport Services",
    ],
},
];

const AreasComponents = () => {
  return (
    <div className="bg-indigo-100 dark:bg-gray-900 p-6 rounded-lg shadow-md">
  <h2 className="text-2xl font-semibold text-black dark:text-white text-center mb-4">
    Subjects in these Areas:
  </h2>

  <div className="space-y-6">
    {areasData.map((area, index) => (
      <div key={index} className="bg-white  p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-black text-center mb-4">
          {area.category}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {area.subjects.map((subject, i) => (
            <div
              key={i}
              className="bg-green-50 p-3 rounded-md shadow text-gray-800 w-fit"
            >
              {subject}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</div>
 
  );
};

export default AreasComponents;
