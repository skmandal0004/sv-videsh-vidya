import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Search, FileSearch, Inbox } from "lucide-react";
import {
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const NavbarComponents = () => {
  const navigate = useNavigate();
  const location = useLocation()

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [query, setQuery] = useState(""); // Search input state
  const [filteredResults, setFilteredResults] = useState([]); // Search results


  const handleGalleryClick = (e) => {
    e.preventDefault(); // Prevent default link behavior

    if (location.pathname === "/gallery") {
      // Scroll immediately if already on About page
      document.getElementById("gallery-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate first, then scroll after a short delay
      navigate("/about");

      setTimeout(() => {
        const galleryElement = document.getElementById("gallery-section");
        if (galleryElement) {
          galleryElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Adjust delay if necessary
    }
  };

  const handleTestimonialsClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/testimonials") {
      // Scroll immediately if already on About page
      document.getElementById("testimonials-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate first, then scroll after a short delay
      navigate("/about");

      setTimeout(() => {
        const galleryElement = document.getElementById("testimonials-section");
        if (galleryElement) {
          galleryElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Adjust delay if necessary
    };

  }


  const handleInternshipClick = (e) => {
    e.preventDefault();

    if (location.pathname === "/internships") {
      // Scroll immediately if already on About page
      document.getElementById("internship-section")?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate first, then scroll after a short delay
      navigate("/applications");

      setTimeout(() => {
        const galleryElement = document.getElementById("internship-section");
        if (galleryElement) {
          galleryElement.scrollIntoView({ behavior: "smooth" });
        }
      }, 500); // Adjust delay if necessary
    };

  }

  // Menu Items
  const menuItems = [
    { name: "Home", link: "/" },
    {
      name: "About Us",
      link: "/about",
      subMenu: [
        { name: "Our Mission, Vision and Values", link: "/about" },
        { name: "Our Students Say", link: "/students" },
        { name: "Testimonials", link: "/testimonials", onClick: handleTestimonialsClick, },
        { name: "Gallery", link: "/gallery", onClick: handleGalleryClick, },
      ],
    },
    {
      name: "Services",
      link: "/service",
      subMenu: [
        { name: "Virtual Coaching", link: "/training" },
        { name: "Counselling and Shortlisting", link: "/counselling" },
        { name: "Applications and Admissions", link: "/applications" },
        { name: "Internships (CPT)", link: "/internships", onClick: handleInternshipClick, },
        { name: "Scholarships and Loans", link: "/scholarships" },
        { name: "VISA Guidance", link: "/visa" },
        { name: "Post Landing Services", link: "/post-landing" },
      ],
    },
    {
      name: "Admissions",
      link: "/admissions",
      subMenu: [
        { name: "Admissions List", link: "/admission-list" },
        { name: "Engineering", link: "/engineering" },
        { name: "Medical", link: "/medical" },
        { name: "Medicine PG (UK, USA)", link: "/medicine-pg" },
        { name: "Management", link: "/management" },
        { name: "Arts, Sciences, Humanities", link: "/arts-sciences" },
      ],
    },
    {
      name: "Trainings",
      link: "/training",
      subMenu: [
        { name: "Online Training", link: "https://training.svvideshvidya.com/" },
        { name: "Training Time Table", link: "/training-time-table" },
        { name: "Spoken English", link: "/spoken-english" },
        { name: "Duolingo", link: "/duolingo" },
        { name: "IELTS (Academic & General)", link: "/ielts" },
        { name: "TOEFL", link: "/toefl" },
        { name: "SAT", link: "/sat" },
        { name: "GRE", link: "/gre" },
        { name: "German Language", link: "/german" },
        { name: "French Language", link: "/french" },
        { name: "PUC - Computer Science ( Offline )", link: "/puc" },
      ],
    },
    { name: "Contact", link: "/contact" },
    { name: "FAQ", link: "/faq" },
  ];


  const searchItems = [
    {
      name: "Applications and Admissions | Svvidesh",
      description: "Get comprehensive guidance for university applications and admissions abroad with SV Videsh Vidya. Our experienced education consultants help you stand out. Visit our page to learn more! Applications and Admissions Documentation and Application Processing Documents are subject to country and course applying for in most cases. Two major points students must understand is that, Timely Submission of Documents is required and that the Documents submitted are in the prescribed format as per the University/Visa guidelines. At S V Videsh Vidya, we provide list of documents based on the guidelines and go through those documents once procured from students and suggest changes if necessary. We also correct and polish the documents based on structure, format, relevance, grammar and objective of the document. Some of the documents that hold critical importance and must not be overlooked are: SOP- Statement of Purpose LOR- Letter of Recommendation Resume/CV Academic Essay or Goals Portfolio Building Application Processing starts as soon as students select the university/course/country and have submitted the documents. S V Videsh Vidya does not charge application fee for the universities represented. Generally, the application processing starts 8-10 months in advance of the intake chosen and can go as less as 1-2 months(depending on all documents ready). We suggest earlier the better as it gives us enough time to apply for Study Abroad Scholarships( which have early deadlines). Turn around time for Universities to make a decision once the application is submitted varies and depends on the volume of application received. It’s always advised to apply early but late applications aren’t necessary at a disadvantage. It takes about 2-4 weeks and in some cases 6-8 weeks to confirm the admission. Interview Preparation In USA/ Germany/ Canada/ Europe/ Australia/ New Zealand, many universities prefer to interview students as part of their Study Abroad Student Admission Process or as an extra step to ensure the right candidature for a particular course applied during university admissions. At S V Videsh Vidya, our team informs the student in advance and coordinate with the universities on students behalf to organize these interviews. These interviews may be telephonic or Skype based and are facilitated in S V Videsh Vidya Office. We help our students with the requisite preparation and provide them significant inputs based on their profle. Internships ( CPT ) Earn while you Learn : Curricular Practical Training ( CPT ) , is the best opportunity for International students. Which will help them to understand the required skill and become job ready. Students can be a part of a community of their profession. The knowledge they gain from the University and CPT, the experience they gain from being part of the community will help them build a strong profile which will attract future employers.",
      link: "/"
    },

    {
      name: "About Us | Svvidesh",
      description: "Discover expert abroad consultancy and test preparation services at SV Videsh Vidya. Get personalized counseling, admission guidance, and visa assistance, plus expert training for IELTS, TOEFL, GRE, and DUOLINGO. Let us help you achieve your goals abroad! About Us S V Videsh Vidya Enterprises is dedicated to helping students from all over India to realize their dream of getting their qualification from an institute that is best suited for their requirements, skills and knowledge they strive to acquire. Mission, Vision &amp; Values YOUR TRUST IS OUR STRENGTH Our Mission : To use our technical skills and provide best solutions to our clients. To help understand individual needs and take a holistic view of clients requirements. To provide seamless integration of services from Training through Admission and all the way till client settles in. To help our clients comprehend the nuances of Overseas Higher Education and save them from any pitfalls. To guide our students at every step of their admission process and educate them about the right choices. Our Value s : Focusing on Quality based solutions Keeping flexible approach &amp; support during training Offering examm oriented learning techniques Handing admission process with utmost sincerity and integrity Ensuring high rate of success in study abroad consultancy Your Success Is Our Pride ! At S V Videsh Vidya, we don’t leave any stone unturned when it comes to servicing our clients. Patience is our Virtue and Knowledge is Power. We believe overseas education has to be customized to individual needs and hence we ensure best fit for our clients. Study abroad options are plenty but we know what suits your profile. We ensure almost 100% success till date. We take pride in your success. Hear it from our students who know u s! All Videos Play Video Play Video 01:26 student of svvideshvdya Play Video Play Video 02:31 MBBS IN PHILIPPINES OUR LADY FATHIMA UNIVERSITY Is recognized as one of the leading university in the field of medicine. It's located in Manila, Philippines and is Recognized by MCI(Medical Council of India). Since, lot of Indian students are unaware of MBBS Abroad options we at SV Videsh Vidya, guide our students and help them to get successful admission and visa in Philippines. We also provide USMLE training. For free Counseling, visit: www.svvideshvidya.com\MedicalAbroad Hear it from our Parents who know us! Mr. Ashwath Narayan Father of Divyashree ( Pursuing MS in Germany ) I was seeking suitable consultant for my daughter’s higher studies in Germany and found SV Videsh Vidya through online search. We got all kind of guidelines and suggestions regarding MS in Germany based on academic profile of my daughter from S V Videsh Vidya. All the support in terms of documents and requirements in Germany were informed and valuable assistance by Mrs Veena got my daughter admission in a prestigious college for MS in Germany. S V Videsh Vidya should continue to support more students in future for higher studies. - View our complete list of Student reviews and ratings - Our Students say Gallery",
      link: "/about",
    },

    {
      name: "Training Time Table | Svvidesh",
      description: "S V Videsh Vidya Enterprises is dedicated to helping students from all over India to realize their dream of getting their qualification from an institute that is best suited for their requirements, skills and knowledge they strive to acquire. Mission, Vision & Values YOUR TRUST IS OUR STRENGTH Our Mission : To use our technical skills and provide best solutions to our clients. To help understand individual needs and take a holistic view of clients requirements. To provide seamless integration of services from Training through Admission and all the way till client settles in. To help our clients comprehend the nuances of Overseas Higher Education and save them from any pitfalls. To guide our students at every step of their admission process and educate them about the right choices. Our Values : Focusing on Quality based solutions Keeping flexible approach & support during training Offering examm oriented learning techniques Handing admission process with utmost sincerity and integrity Ensuring high rate of success in study abroad consultancy Your Success Is Our Pride ! At S V Videsh Vidya, we don’t leave any stone unturned when it comes to servicing our clients. Patience is our Virtue and Knowledge is Power. We believe overseas education has to be customized to individual needs and hence we ensure best fit for our clients. Study abroad options are plenty but we know what suits your profile. We ensure almost 100% success till date. We take pride in your success. Hear it from our students who know us! All Videos student of svvideshvdya 01:26 student of svvideshvdya MBBS IN PHILIPPINES OUR LADY FATHIMA UNIVERSITY Is recognized as one of the leading university in the field of medicine. It's located in Manila, Philippines and is Recognized by MCI(Medical Council of India). Since, lot of Indian students are unaware of MBBS Abroad options we at SV Videsh Vidya, guide our students and help them to get successful admission and visa in Philippines. We also provide USMLE training. For free Counseling, visit: www.svvideshvidya.com\MedicalAbroad Hear it from our Parents who know us! Dr. Grover Freshman Program in FH Aachen- Germany It was really a great accidental finding on the net through which we came in touch with SVV. Right from day one , Abhishek Tiwari sir’s online coaching was specially oriented towards the Freshman entrance test & it played the most pivotal role in cracking the test. My son got through in the very first attempt. We will always remember the late night classes taken by Abhishek sir sacrificing his own comfort. Veena ma’am was always keen to find time from her busy schedule to reply to our queries and guide us to our satisfaction , from starting the application process till my son took the test her team was always there with their full team spirit. SVV deserves a pat N I’m sure in future also they will enable more n more students to shine more n give their parents a sense of satisfaction! Sincere thanks n All the very best to SVV . - View our complete list of Student reviews and ratings - Our Students say",
      link: "/about/mission"
    },

    {
      name: "Admissions | Svvidesh",
      description: "SV Videsh Vidya offers comprehensive admissions services to help you secure a place in your dream university abroad. Our consultants provide personalized guidance throughout the application process, ensuring your success. Visit our Admissions page and take the first step towards a brighter future! ADMISSIONS Categories Engineering Arts, Sciences, Humanities Management Check out where our students have joined ! : Admissions List S V Videsh Vidya Enterprises, Study Abroad Consultant is centrally located at BTM layout 2nd Stage, caters to the need of students from all the fields: MBBS, MEDICAL PG ( MS in non Clinical), Engineering, Arts &amp; Humanities, Sciences, MBA etc. Most of the study abroad courses need tests like SAT, IELTS, TOEFL, DUOLINGO, GRE, German and French Language. At S V Videsh Vidya we train students and make them ready and eligible to apply for overseas education. We plan the time line of the students and track the progress of their application and send timely reminders at every step of the admission process. Among various benefits as listed above, you will find our study abroad consulting charges very reasonable. Among others we offer free counseling and profile shortlisting. We also provide free Visa Guidance* to our students. We listen to your individual requirements and give you customized solutions for your needs. This ensures higher selection of our students.",
      link: "/students"
    },

    {
      name: "🎓Study Engineering Abroad - BTech in Abroad @Svvidesh | Svvidesh",
      description: "Study Engineering Abroad - Discover our expert-designed engineering programs for your dream career. Get comprehensive guidance to choose Engineering Study in UK, USA &amp; Canada right universities! Engineering Engineers play a vital role within every country in the world and more and more people are beginning to understand the importance of top quality engineering graduates. Studying engineering will present lots of career opportunities, but anyone interested in an engineering qualification should be aware of some general points before beginning. Engineering is one of the most rewarding careers of the modern world, and one that can lead to a large number of different roads and areas of specialism. The chance to study engineering abroad is an exciting, dynamic and wonderful road to choose, and can be combined with other subjects if you so wish. Why Study Engineering Abroad? Studying abroad can be a scary decision to make, full of ‘what do I do about…’, ‘what happens with…’, and ‘what if…’ – all confusing thoughts, but once the decision is made, it will no doubt become one of the best decisions you ever made, and will leave you with a once in a lifetime experience, and an extremely valuable degree to take wherever you please.Engineering has maintained its popularity as an academic subject and with technological and social developments taking place all over the globe now, engineering really is an international subject. It doesn’t matter where you want to study engineering, because it is truly a global subject with the best universities for engineering spread across the world. Whether you wish to study engineering in the USA / UK / Canada / Australia / NZ / UK / Dubai etc or you want to find engineering courses with Free Education in Germany or other European countries S V Videsh Vidya can help you across the globe. Example for Benefits of studying in USA is given below. Benefits of Studying in USA USA has almost 1/4th of Worlds top 100 Universities Internships (CPT) upto 12 months while studying Post-study stay back visas (OPT) up to 3 years for STEM programs Various Scholarships We offer admissions in more than 10 Best cities in the World Opportunities for Research, Teaching &amp; Graduate Assistantships Entry Requirement : IELTS / TOEFL / Duolingo / PTE SAT for Undergraduate GRE for Masters GMAT for MBA Types of Engineering Courses you can Study Abroad: Engineering courses are plentiful and there are many different engineering degrees to study, which can be combined with another subject, such as a modern language, law, business, computers or medicine. This will give you even more chance of jetting off on an exciting career! You can also study practically anywhere in the world, but the most popular choices are USA, Australia, New Zealand, UK, Ireland, Italy, Germany, France and Canada. You can study at different levels, including diploma, undergraduate, and postgraduate, however most highly paid engineers studied for a postgraduate degree in engineering, whether that is combined with another subject or not. Deciding to study engineering abroad will give you access to around 5,000 different courses. Engineering courses are available at many levels and the most popular ones are listed below. Foundation Undergraduate Postgraduate (including taught, research and PhD) S V Videsh Vidya can help you choose an engineering university or school that is right for you. Choose a place that specializes in the area you are most interested in, such as : Aerospace Architecture and Building, Automotive Bio Technology Biomedical Chemical Civil Engineering, Construction and Construction Management Electrical Electronics &amp; Embedded Technology Energy &amp; Power Engineering Trades Environmental Science / Protection and Technology General Engineering &amp; Technology Industrial &amp; Systems Engineering Study Engineering Abroad btech in abroad Engineering Study in UK Study Engineering in USA Manufacturing and Processing – Paper and Bioprocess Marine Materials Science &amp; Engineering, Mechanical Mechatronics Mining Nanoscience, Nanotechnology Petroleum, Oil and Gas, Diesel Technology Robotics Renewable Energy and Materials Textile Water Resources Wild Life Ecosystem, Conservation Sustainable Energy Transportation Engineering or study in a country that appeals to you the most.",
      link: "/testimonials"
    },

    {
      name: "📗German Language Course - 🗣️Coaching for German language | Svvidesh",
      description: "Svvidesh offers online German language course classes in India by an exp trainer. Get 100% trusted Coaching for German language online courses demo with notes to get fluency in German language. German Language German is one of the most widely spoken languages in the world, with around 130 million speakers. Germany is also a popular destination for higher studies among Indian students. Learning the German language can be extremely beneficial for Indian students who wish to pursue their higher education in Germany, as well as for those who want to work or settle in Germany. One of the primary benefits of learning the German language is that it can increase the chances of getting admitted to German universities. Many universities in Germany offer courses in German language, and a good knowledge of the language can help students in communicating with their professors and classmates, and in understanding the course material better. Moreover, learning German can also be beneficial for students who wish to work in Germany after completing their studies. Many German companies have a global presence and require employees who are proficient in German language. Knowledge of the German language can also open up opportunities for Indian students to work in other European countries where German is widely spoken. In addition to academic and career opportunities, learning the German language can also enhance the overall cultural experience of studying abroad in Germany. Knowing the language can help students interact with locals, understand the local culture, and explore the country beyond the tourist destinations. To conclude, learning the German language can be extremely beneficial for Indian students who wish to pursue their higher education or career in Germany. It can increase the chances of getting admitted to German universities, open up career opportunities, and enhance the overall cultural experience. Therefore, it is highly recommended for Indian students who are inte rested in studying abroad in Germany to learn the German language.",
      link: "/gallery"
    },

    {
      name: "TOEFL Exam Preparation - 🎓TOEFL Preparation in Bangalore | Svvidesh",
      description: "TOEFL Exam Preparation - SV Videsh Vidya provides expert coaching for the TOEFL exam for USA, UK &amp; Canada helping you achieve your goals of studying abroad. TOEFL Exam The Test of English as a Foreign Language (TOEFL) is another popular English proficiency exam accepted by universities and institutions worldwide, including in India. The exam measures the student's ability to use and understand English at the university level and consists of four sections: Reading, Listening, Speaking, and Writing. The test duration is approximately four hours and is conducted online at designated test centers. The TOEFL exam begins with the Reading section, which consists of three to five passages followed by multiple-choice questions. The Listening section involves listening to audio recordings and answering related questions. The Speaking section requires the student to record responses to six tasks, which include expressing an opinion, summarizing information, and responding to a conversation. The Writing section involves writing responses to two tasks, which include writing an essay based on a given prompt and summarizing and analyzing a given text. To prepare for the TOEFL exam, students can use official TOEFL resources such as the TOEFL website, which provides free practice tests and sample questions. Additionally, students can work on improving their English language skills by reading English literature, watching English language movies and TV shows, and practicing speaking in English with native speakers. It is important to focus on developing vocabulary, grammar, and time management skills while preparing for the exam. The TOEFL exam is conducted throughout the year at various test centers across India, and students can choose the test date and location that best suits their needs. It is recommended that students register for the exam well in advance to avoid any last-minute rush. In conclusion, the TOEFL exam is an essential requirement for students who wish to study abroad, and students can prepare for it by using official TOEFL resources, improving their English language skills, and registering well in advance for the exam. The exam's structure is designed to test the student's proficiency in various aspects of English, including reading, writing, listening, and speaking, and it is important for students to focus on each of these components while preparing for the exam.",
      link: "/service"
    },

    {
      name: "IELTS Exam Preparation - IELTS  Prep for Education USA, UK, Canada | Svvidesh",
      description: "IELTS Preparation - SV Videsh Vidya offers expert IELTS coaching, &amp; IELTS exams, helping you achieve your goals of IELTS prep for education USA, UK, Canada. Our consultants provide personalized guidance to ensure your success. IELTS Exam The International English Language Testing System (IELTS) is one of the most popular English proficiency exams accepted by universities and institutions around the world, including India. The IELTS exam consists of four modules: Reading, Writing, Listening, and Speaking, and is designed to test the student's proficiency in English. The exam can be taken in two formats: paper-based or computer-based, and the total test duration is approximately 2 hours and 45 minutes. The IELTS exam begins with the Listening section, where students are required to listen to four recordings and answer related questions. The Reading section follows, which consists of three passages with a total of 40 questions. The Writing section includes two tasks that test the student's writing skills, while the Speaking section is conducted as an interview with a certified examiner. To prepare for the IELTS exam, students can start by taking free practice tests available on the official IELTS website to familiarize themselves with the exam format and types of questions. Additionally, students can work on improving their English language skills by reading English literature, watching English language movies and TV shows, and practicing speaking in English with native speakers. The IELTS exam is conducted throughout the year at various test centers across India, and students can choose the test date and location that best suits their needs. It is recommended that students register for the exam well in advance to avoid any last-minute rush. In conclusion, the IELTS exam is an essential requirement for students who wish to study abroad, and students can prepare for it by taking practice tests, improving their English language skills, and registering well in advance for the exam. The exam's structure is designed to test the student's proficiency in various aspects of English, including reading, writing, listening, and speaking, and it is important for students to focus on each of these components while preparing for the exam.",
      link: "/virtual-coaching"
    },

    {
      name: "Services | Svvidesh",
      description: "SV Videsh Vidya offers expert guidance and coaching for management studies, helping you achieve your goals of pursuing a career in business. Our education consultants are here to guide you every step. Visit our management studies page today and take the first step towards your dream career! Services Virtual Coaching Counselling and Shortlisting Applications and Admissions Internships ( CPT ) Scholarships and Loans VISA Guidance Post Landing Services",
      link: "/counselling"
    },

    {
      name: "Live SAT Online Coaching - 🎓SAT Training & Coaching Classes| Svvidesh",
      description: "Looking for SAT online coaching in India for Abroad? Svvidesh provides SAT coaching &amp; SAT exam preparation for USA, UK &amp; Canada. Achieve your goals of 📚studying abroad. SAT Exam The Scholastic Assessment Test (SAT) is an internationally recognized exam for college admission, including in India. The SAT exam measures the student's reading, writing, and math skills, and is designed to assess a student's preparedness for college-level work. The exam duration is approximately 3 hours and 50 minutes, and is divided into two main sections: Evidence-Based Reading and Writing (EBRW), and Math. The EBRW section includes a Reading Test and a Writing and Language Test. The Reading Test includes passages from different subjects such as social sciences, natural sciences, and literature, and tests the student's ability to analyze text and answer related questions. The Writing and Language Test includes questions related to grammar and language use. The Math section includes two tests: a Calculator Test and a No-Calculator Test. The Calculator Test includes questions related to algebra, data analysis, and trigonometry, while the No-Calculator Test includes questions related to geometry, algebra, and basic arithmetic. To prepare for the SAT exam, students can use official SAT resources such as the SAT website, which provides free practice tests and sample questions. Additionally, students can work on improving their reading, writing, and math skills by reading extensively, practicing math problems, and taking timed tests. The SAT exam is conducted multiple times a year at various test centers across India, and students can choose the test date and location that best suits their needs. It is recommended that students register for the exam well in advance to avoid any last-minute rush. In conclusion, the SAT exam is an essential requirement for students who wish to study abroad, and students can prepare for it by using official SAT resources, improving their reading, writing, and math skills, and registering well in advance for the exam. The exam's structure is designed to test the student's preparedness for college-level work, and it is important for students to focus on each section while preparing for the exam.",
      link: "/applications"
    },

    {
      name: "Trainings | Svvidesh",
      description: "Prepare for your study abroad journey with SV Videsh Vidya's expert training programs. Our education consultants offer comprehensive coaching for exams such as GRE, IELTS, TOEFL, PUC tuitions and more. Visit our trainings page today and take the first step towards your dream of studying abroad! TRAININGS Click Here for Free Demo ! You can get professional online training sessions from expert tutors. Get coached by dedicated team of professionals for GRE, TOEFL AND IELTS. Proven ability in getting scores for our students. Over 14,600 hours of training students from diverse backgrounds. Shorter batch size(Individualised attention). Curriculum as per International standards. Consistent monitoring and feedback. Register with S V Videsh Vidya for Combo Offer GRE+TOEFL Online Training Check out our online training portal where we have variety of materials to make your preparation hassle free. Online training Keep yourself up to date with our training timetable for the best preparation to your exams ! Training Time Table GRE GRE is one of the most acceptable test taken by students and professionals worldwide.GRE scores are utilized to decide on the reasoning abilities of students through both Verbal as well as Quantitative tests. Aspirants seeking admission to the Post Graduate or Doctoral programs in various Universities and Colleges take GRE exam. Business Schools accept GRE scores and a high GRE score may tilt the scale in student’s favor. There are two types of GRE exam: GRE General Test &amp; GRE Subject Test. To know which one you need to write &amp; how, click below: GERMAN LANGUAGE Also called as ‘Language of the Deutschland’ , is the official language of Germany.German is widely spoken language in Europe and other parts of the world. With over 200+ million speakers worldwide and as 10th most spoken language, German has great sense of culture involved and leads in bringing people together. Besides, Germany has free education for courses taught in German Language To know more about opportunities that exist via German Language, click below:. IELTS International English Language Testing System is taken by highest number of students across the world. IELTS is designed to test the most important aspect of knowing English language under four categories viz., Reading, Writing, Listening &amp; Speaking. To know more, click below: TOEFL Test Of English As Foreign Language is a test originally designed for non-native English language speakers applying to universities in USA. Later, it was adopted by almost all the countries world wide. TOEFL iBT test conducted by ETS has a paper format as well. To know more, click below: DUOLINGO Duolingo offers an English proficiency exam for students applying to universities in India.The Duolingo English Test (DET) can be taken online and assesses reading, writing, listening, and speaking skills.The exam is recognized by several universities in India as an alternative to traditional English proficiency tests like TOEFL and IELTS. SPOKEN ENGLISH English is the language of instruction in many universities and institutions abroad, making it crucial for students to have a good command of spoken English. Strong spoken English skills can also enhance the student's ability to communicate with classmates, professors, and the local community in a foreign country. Improving spoken English proficiency can also improve the student's confidence and increase their chances of success in academic and professional pursuits. SAT The SAT exam is a standardized test commonly required for admission to colleges and universities in the United States. The exam measures a student's knowledge and skills in math, reading, and writing and includes an optional essay section. Many universities in India recognize the SAT as an alternative to domestic entrance exams for admission to undergraduate programs. FRENCH French is an important language for international studies, particularly in Europe and Africa, where it is widely spoken. French proficiency can enhance opportunities for studying at French universities and participating in exchange programs with French-speaking countries. Knowledge of French can also be advantageous for pursuing career opportunities in industries such as international business, tourism, and diplomacy. PUC - Computer science classroom coaching PUC is Pre-University is 2 years Course offered by Karnataka State, India. PUC is equivalent to 11th and 12th grades of schooling in other states educational system. Students with 10th Standard qualification can join PUC 1st Year. In PUC subjects like PCMB or PCMC, CEBA, HEBA are offered. PUC exams are conducted at the end of 2years and the results determine eligibility for higher education like Under Graduate degree programs in colleges and universities. We at S V Videsh Vidya enterprises conduct Class Room tuitions (Offline Training) for Computer Science courses for PUC 1st and PUC 2nd year. - View our complete list of Student reviews and ratings - Our Students say",
      link: "/internships"
    },

    {
      name: "SVVidesh | Best Abroad Consultants and Coaching for International Exams",
      description: "Study Abroad - Get expert abroad consultancy and international test preparation services at SV Videsh Vidya Enterprises. Personalized counseling, admission guidance, visa assistance &amp; training for IELTS, TOEFL coaching, GRE &amp; DUOLINGO. Study Abroad Now Discover popular and high ranked universities with our help and fulfill your dream of flying abroad. Contact now SIGN UP FOR FREE PROFILE REVIEW Enter your email here Sign Up Thanks for submitting! S V Videsh Vidya Enterprises Global Education Services Why Study Abroad ? Study Abroad is as alluring as it can get. It presents itself with tremendous opportunities and uncertainties. You step into the real world and in most cases, out of your comfort zone and embrace the differences that exist in various cultures and education systems. Traveling is an integral part of the study abroad process and it paves the way to a great future once you inculcate the learning from the difficulties and challenges of a new culture in your stride. S V Videsh Vidya Enterprises is dedicated to helping students from all over India to realize their dream of getting their qualification from an institute that is best suited for their requirements, skills and knowledge they strive to acquire. Our unique experience facilitates education in the United Kingdom, USA, Australia, Canada, New Zealand, Ireland, Germany, Latvia, Lithuania, Estonia, Finland, Italy, Spain, France, Dubai, Singapore, Philippines, Sweden, and Switzerland . With our expert knowledge we believe we can help students looking for quality education with affordable fees in top Universities that provide the State-of-the-art facilities, thus enabling our students to be globally competitive. Admissions List Top Reasons to Study Abroad Educational Benefits Studying abroad, you will experience education in a completely new way due to the difference in the systems of education. This can be challenging at first, but it will broaden your mind to new ways of learning and enhance your skills and personality in countless ways. Enhance Your Career Opportunities After completing your overseas education, you are equipped with a globally rec ognised degree, enhanced language skills, a widened perspective on culture and willingness to take on new challenges whether you choose to stay and apply for visa or you return home and seek work. See The World In between lectures and assignments, you will get plenty of time to explore whether you are visiting iconic landmarks or trying new cuisines. Your stay abroad is bound to make you a global citizen. What to Study ? Medicine Medical PG Nursing Dentistry Medicine ENGINEERING B.Tech MS Masters PDGM Other Engineering Courses Engineering Business and Management MBA Arts Commerce Finance Business &amp; Managment Virtual / Online Live Trainings IELTS TOEFL GRE German Spoken English SAT DUOLINGO French Our Students Say - View our Student reviews and ratings - Our Students feedback Jeetendra B.Tech - China I thank you for your kind and excellent services provided to me from the beginning till the end. Thank you for helping me in getting admission for MS and MBA in Italy in 3 Universities. I appreciate your services and admire your knowledge in all programs , countries and various options students can get in pursuing higher education abroad. Wish you good luck! Nikhil MBA - Italy  I Approached SV Videsh Vidya Enterprises very late with respect to admissions and Mrs Veena was very helpful in helping me find a suitable university as per my needs and helped in securing my admission to the very prestigious Sichuan University in China within a couple of weeks and also in obtaining all the necessary documents and completing all the formal procedures. I am very glad to have Approached S V Videsh vidya for assistance on furthering my education. Mayank Sharma - I spent more than 6 months in searching for good Univ and spent more 60 to 85000 for application and courier charges but I did not get admission anywhere. I was determined to do MS in Germany so, I visited SVVV and was given 100% guidance. I got admission in 4 Univs. It was very difficult to choose 1 out of 4.",
      link: "/scholarships"
    },

    {
      name: "VISA Guidance | Svvidesh",
      description: "Get expert visa guidance for studying abroad with SV Videsh Vidya. Our team provides personalized support for a smooth application process. Visit our Visa Guidance page and start your journey today! VISA Counselling And Guidance Visa Guidance One of the most important steps of Overseas Education Services is Visa Guidance. One should never undermine the importance of Visa application process as even students with good profiles get rejected for various reasons. More and more countries are revamping their Visa laws. Even visa rules concerning Student Visa applications are made stringent. Visa norms of every country is different and generally revolves around below mentioned cases. Difficult Visa Application processing, Easy Interview process Easy Visa Application processing, Difficult Interview process Difficult Application processing, Difficult Interview process Needless to say, the third category is the worst-case scenario and essentially be taken care of with meticulous planning. At S V Videsh Vidya, we ensure hassle free and complete Visa Guidance be provided to the students during study abroad admission process. We have divided Student Visa Application process in following steps. Understanding Visa Process Study Abroad student visa comes in the last leg of the admission process and to say the least is the only thing standing between Student and Student’s dreams becoming true. Therefore, a thorough understanding of Visa norms of the country goes a long way in securing Visa, post interview. Student Visa process takes 1-2 weeks to about 4-6 weeks sometimes and hence students should try to finish the Visa interview within a week or so after getting I-20 or similar confirmation from the University depending on the country applying to. In some cases, students are not allowed to enter their study abroad destination or weren’t granted Visa, because the Program/Course session had already commenced, and students had gone well past their deadlines. Students need to take the Vaccination while applying for study abroad in many countries and documents must be produced during Visa, Travel and accommodation options must be finalized in many countries and proof of such can be asked by Visa Officer. S V Videsh Vidya team prepares our student to tackle all these issues and many more by educating them about the Do’s &amp; Don’ts. Collecting Documents Required for Visa Procuring all the documents is undoubtedly a quintessential step in Study Abroad student Visa process. All documents stated mandatory by the study abroad destination country during Visa must be arranged in Originals and multiple copies. In some cases, there are prescribed formats which needs to be adhered to while compiling those documents. Some of the common documents required for Student Visa are as following: The letter of acceptance from the university documents specifying duration of your studies Documents specifying your academic and non-academic achievements in school/college A copy of GRE, IELTS or TOEFL or PTE scores(notarized by lawyer) of recommendation from your college professor/school faculty detailing your progress as a student under their supervision. Those having work experience must get a Recommendation letter or Reference letter from their employer(s) documents specifying any Scholarships awarded documents specifying entire funding details, and a letter from your sponsor(Affidavit of Support) All previous degrees mark-sheets, certificates and transcripts detailing all the subjects taught to you in your college or school and marks secured documents specifying your travel plans documents specifying the course you’ve enrolled in Visa fee payment Receipt. documents specifying your accommodation funding and arrangements Applying for Visa and Selecting Visa Interview date Once the documents are arranged and are in order, student or S V Videsh Vidya team will apply for the Visa and take a Visa Interview date. For most countries there is a pre-defined Visa fee and student has to pay the fee in order to get their Study Abroad student Visa processed. Visa process can be either: completely online or online application and offline(visa interview) Contact us Contact Preparing for Visa Interview All our students will be provided free counseling. We also help them in preparing on all the above steps and provide questionnaire, hints to answer the questions and conduct 1-2 rounds of interview to overcome the anxiety of facing the Student Visa Interview. Couple of points are helpful in case of most successful Visa applicants. All the documents that are required are presented in originals or as instructed. A clear intent of pursuing overseas education must be presented through the application and/or during the Interview.",
      link: "/visa"
    },

    {
      name: "MS in Abroad - 🎓Masters in USA | Arts, Sciences @Svvidesh | Svvidesh",
      description: "Svvidesh offers Arts, Sciences, MS abroad &amp; Master's in UK, USA programs. Our expert consultants offer comprehensive guidance to help you choose the right universities. Arts, Sciences, Humanities and Other Prime destinations for arts and humanities overseas education for Indian students are US, Canada, UK, Singapore, Australia and New Zealand. Depending on the courses and budget, students can decide to pursue above courses from one of these countries. Indian students prefer to go to UK / USA / Canada / Australia for Medicine, Health and Health Care. USA, Canada, Australia , Singapore, Italy, France for Arts, Graphic design, Film making, Fashion, Culinary, Photography, Painting and Animation based courses; UK for Dance, Theater, Music and other courses; USA / UK/ Canada/ Australia fpr Personal Services and Education. Duration of Education: Most programs are 1 year to 3 year long. Post graduate students prefer to go for 1 -2 year programs whereas Undergraduate students pursue 2-3 year long courses along with Internships at various companies. Cost of Education: The average cost of one year program ranges from INR 5lacs to INR 12lacs. Two-Three year programs can cost between INR 12 lacs to 30 lacs in total. Entry Requirements: English language requirements for Indian students is a must. Students may fulfill that through one of these tests. Subjects in these Areas : Arts Animation Applied Arts - Printing, Studio Art Bakery and Pastry Arts Music Dance Theatre,Drama Visual Arts Liberal Arts and Studies Photography Fine Arts-Drawing, Painting, Sculpture Film, Cinematography, Interactive Media, Multimedia Design Interior Design Carpentry, Woodworking, Blacksmithing, Goldsmithing, Silversmithing, Ceramics Fashion, Textile, Graphics, Product Humanities Indigenous Studies Language and Literature Museum and Gallery Studies Philosophy, Aesthetics Religious Studies Theology Journalism and Information ,Broadcasting Publishing Advertising Media, Mass communication, Technical comunication Law - LLB, LLM Criminology , Forensic Science, Justice and Emergency Services Legal Assistant, Court Support Life Sciences Biochemistry Bioinformatics Biology, Biological Science Biomaterials Biomedical Sciences Biotechnology Agriculture, Forestry and Fishery Horticulture , Mariculture, Poultry, Dairy Genetics Hydrobiology Immunology Marine Biology Microbiology Neuroscience Oral Science Physiology Plant Taxanomy , Plant Science Zoology General Science Astronomy, Astrophysics Atmospheric Sciences Chemistry Earth Sciences Geography Geology Geophysics Geospatial Science Lab Technician Meteorology Physics Mathematics and Statistics Actuarial Science ms in abroad MS in USA MS in UK Masters in USA Masters in UK masters overseas ms in abroad ms in foreign masters courses abroad masters in education abroad master of science in abroad Medicine, Health and Healthcare Acupunture Addiction and Mental Health Audiology - Speech, Speech pathology, Speech Therapy Autism Cardiovascular Science Clinical Lab Communicative Disorder Dentistry, Dental Hygiene Dietetics, Nutrition Drug Development Fitness, Physical Activity Food Science, Food Science and Nutrition, Food Science and Technology, Wine Making, Brewery, Winery Health Psychology Kinesiology Medical Radiation Technology Medical Science Medical Technology Medicine Midwifery Nursing Occupational Therapy Optometry Paradmeic Studies Pharmaceutical Sciences, Pharmacy Physical Therapy, Physiotherapy Psychiatric Nursing Psychology Public Heath Radiologic Science Recreation Rehabilitation Assistant Respiratory Care Therapeutic Recreation Therapist Assistant Veterinary Animal Care Animal Conservation Animal Science Veterinary Science Education Adult, Organisational Learning and Leadership Early Childhood Education, Primary Education ,Secondary Education Education - Assistance, Counseling, Training Physical Education Reading Creative Writing Teacher Education Program Other Services Aviation Culinary Skills Financial Services Hair Styling, Makeup, Cosmetics, Esthetic Services Hospitality, Culinary Arts, Travel and Tourism Massage Therapy Sports Science, Sports, Exercise Physical Sciences, Sciences Security Services Criminal Science, International Criminology Fire Science, firefighting, Fire and Safety Forensic Science Military Safety, Police and Public Safety Social and Behavioural Science Anthropology Archaeology Behavioral Sciences Cultural studies, Inter-cultural communication Economics Ethnic Studies Gerontology Human Ecology, Ecology Human Service International Relations Political Science Social Policy Sociology, Social Science Social Services Child Care, Child and Youth Worker, Child Care Development and Studies Community Development Developmental Service Worker Personal Support Work Social Work and NGO Related Fields Transport Services",
      link: "/post-landing"
    },

    {
      name: "Forum | Svvidesh",
      description: "Join the SV Videsh Vidya community and connect with other students interested in studying abroad. Our forum is a place to ask questions, share experiences, and get advice from our education consultants. Visit our forum page today and start engaging with like-minded individuals! To test this feature, visit your live site. All Posts Categories My Posts Forum Welcome! Have a look around and join the discussions. Sort by: Recent Activity Follow All Categories Create New Post gagan1nh19cs052 Welcome to the Forum in General Discussion Share your thoughts. Feel free to add GIFs, videos, hashtags and more to your posts and comments. Get started by commenting below. 0 comments 0 Jan 18, 2023 Like 0 comments Comment gagan1nh19cs052 Forum rules in General Discussion We want everyone to get the most out of this community, so we ask that you please read and follow these guidelines: • Respect each other • Keep posts relevant to the forum topic • No spamming 0 comments 0 Jan 18, 2023 Like 0 comments Comment gagan1nh19cs052 Introduce yourself in General Discussion We'd love to get to know you better. Take a moment to say hi to the community in the comments. 0 comments 0 Jan 18, 2023 Like 0 comments Comment Forum - Frameless",
      link: "/admission-list"
    },

    {
      name: "Medical | Svvidesh",
      description: "Medical Studying medicine abroad offers Indian students a unique and enriching opportunity to receive a world-class education while experiencing new cultures and healthcare systems. With increasing competition for medical seats in India, pursuing a medical degree overseas has become an attractive option for many aspiring doctors. Countries like the USA, UK, Canada, Australia and Philippines are renowned for their high standards of medical education, cutting-edge facilities, and comprehensive curricula. These programs often provide hands-on clinical training, exposure to advanced medical technologies, and the opportunity to learn from leading healthcare professionals. Furthermore, studying abroad can enhance a student's global perspective, improve language skills, and foster personal growth. The international exposure and diverse patient interactions gained during these programs are invaluable, preparing students to excel in a globalized medical field. Our consultancy is dedicated to guiding students through every step of this journey, from selecting the right university and navigating the application process to ensuring a smooth transition and successful adaptation in a foreign country. We aim to empower Indian students to achieve their dream of becoming globally competent medical professionals, equipped with the knowledge and skills to make a significant impact in the healthcare industry. Medical PG",
      link: "/admissions/medical"
    },

    {
      name: "Online English Speaking Course - 🗣️Learn English Online at Svvidesh | Svvidesh",
      description: "Best English Speaking Course Online - SV Videsh Vidya offers comprehensive Spoken English training to help you improve your communication skills and gain confidence. Spoken English English is the most commonly used language for academic instruction in many countries across the world, particularly in the western hemisphere. Therefore, it is crucial for students aspiring to study abroad to have a good command of spoken English to ensure they can effectively communicate with professors and classmates in a foreign language. In addition to academic pursuits, strong spoken English skills can also enhance the student's ability to interact with the local community and engage in cultural activities while studying abroad. Improving spoken English proficiency can also boost the student's confidence, which can positively impact their academic and professional pursuits. Moreover, a good command of English is also essential for pursuing career opportunities in the international job market, where English is often the primary language of communication. Thus, having a good command of spoken English is essential for students aspiring to study abroad, as it can help them excel academically, socially, and professionally.",
      link: "/admissions/engineering"
    },

    {
      name: "Counselling and Shortlisting | Svvidesh",
      description: "SV Videsh Vidya offers a wide range of services to help you achieve your study abroad goals. From GRE, IELTS, and TOEFL coaching to expert guidance from our education consultants, we have everything you need to succeed. Explore our services today and learn more about how we can help you. Counselling and Shortlisting Counselling / Profile Assessment Every aspirant needs to assess where they stand with respect to their profile. Are you falling short of some standard tests requirements? Are you having less percentages? Do you have all academic records? Are you a person with lots of extra-curricular but low academic score? Do you have backlogs and if yes, what are the chances? Do you have gap in education? And many more… Most of these questions are relevant to study abroad aspirants. And make no mistake, if you carefully handle even the worst of situation in a positive way, there may be a wonderful opportunity waiting for you. So why wait!! Get your Free Study Abroad Profile Evaluation done through our experts and step in to a better and successful career. Shortlisting of Universities Needless to say this is one of the most critical aspect of your Study Abroad application. We help our registered students in shortlisting the colleges/universities based on the Profile Assessment done in first step. It involves interest of the students keeping in mind their overall profile which includes academic scores, standardized test scores, work experience, budget and other factors. We are flexible in applying to universities where we are partnered and/or outside of that. Once the student is ready to apply after having consulted with friends and family, we start the Documentation. There are over 10000+ courses in more than 15 countries across various fields to choose from. To read about specific options available through S V Videsh Vidya.",
      link: "/admissions/medicine-pg"
    },

    {
      name: "FAQ | Svvidesh",
      description: "Get expert visa guidance for studying abroad with SV Videsh Vidya. Our team provides personalized support for a smooth application process. Visit our Visa Guidance page and start your journey today! FAQ Basics Which is advisable ? IELTS or TOEFL for Pursuing Masters abroad ? Both IELTS (International English Language Testing System) and TOEFL (Test of English as a Foreign Language) are widely accepted tests of English language proficiency for students who want to pursue Masters abroad. However, the choice between IELTS and TOEFL depends on a few factors: Requirements of the University: The first and most important factor to consider is the language proficiency requirement of the university you are applying to. Some universities accept only IELTS, while others only accept TOEFL. It is important to check the requirements of the university and choose the appropriate test accordingly. Test Format: IELTS and TOEFL have different test formats. IELTS has four sections - listening, reading, writing, and speaking, while TOEFL has four sections - reading, listening, speaking, and writing. The IELTS test is conducted in-person, while the TOEFL test can be taken either in-person or online. You should choose the test format that you are most comfortable with and suits your learning style. Scoring System: The scoring system of IELTS and TOEFL is different. IELTS uses a band score ranging from 1 to 9, while TOEFL uses a score range of 0 to 120. It is important to understand the scoring system of the test you choose, as it can affect your application and admission chances. Test Availability and Cost: IELTS and TOEFL are available in many countries, but the availability may vary depending on your location. The cost of the test also varies, and you should choose the test that is affordable and convenient for you. In summary, both IELTS and TOEFL are acceptable tests for English language proficiency for Masters abroad. You should choose the test based on the requirements of the university, the test format, the scoring system, and the availability and cost of the test. Which country requires GRE Scores ? The GRE (Graduate Record Examination) is a standardized test that is commonly required for admission to graduate programs in the United States and Canada. However, it is also accepted by many universities in other countries. Some countries outside of the US and Canada that require or accept GRE scores for graduate admissions include: United Kingdom Australia Singapore Germany France Netherlands South Korea Hong Kong Switzerland Sweden It's important to note that while some universities in these countries may require GRE scores, others may not. It is always a good idea to check the admission requirements of the university and program you are interested in to determine if the GRE is required. What about Job opportunities for Indian Graduates outside India? Job opportunities for Indian graduates outside India vary depending on the country and industry in question, as well as the individual's qualifications, skills, and experience. However, in general, there are several factors that make Indian graduates attractive to employers in other countries: English Language Skills: Indian graduates are often fluent in English, which is the primary language of business in many countries. This makes them attractive to employers who operate in English-speaking markets. Technical Skills: Indian graduates are often highly skilled in technical fields such as engineering, computer science, and mathematics. These skills are in high demand in many countries, particularly in the technology and finance sectors. Cultural Adaptability: Indian graduates are often adaptable and able to work effectively in multicultural environments. This is an important skill in today's globalized economy, where companies operate across multiple countries and cultures. Education and Training: Indian graduates are often well-educated and trained, with degrees from top universities in India and abroad. This can be an advantage in many countries where education and qualifications are highly valued. Some of the countries that offer job opportunities for Indian graduates include the USA, UK, Canada, Australia, Singapore, and UAE. In addition, Indian graduates may also find job opportunities in other countries that have strong economic ties with India, such as Germany, France, and Japan. However, it is important to note that finding a job outside India can be competitive, and Indian graduates may need to work hard to distinguish themselves and demonstrate their value to potential employers. Benefits of studying in USA or UK for Indian Engineering graduate? There are several benefits to studying in the USA or UK for Indian engineering graduates: High-Quality Education: Both the USA and the UK are known for their world-class education systems, which offer high-quality programs and teaching methods that are globally recognized and respected. Students who study in these countries can benefit from exposure to cutting-edge research, innovative teaching methods, and hands-on practical training. Career Opportunities: The USA and UK are both home to some of the world's leading companies in the technology and engineering sectors. Studying in these countries can provide Indian engineering graduates with access to exciting career opportunities and help them build a strong professional network. Cultural Exposure: Studying in a foreign country can provide students with a unique cultural experience, helping them develop a global perspective and expand their horizons. Living and studying in the USA or UK can expose Indian engineering graduates to different lifestyles, values, and ways of thinking, which can be valuable in both their personal and professional lives. Language Proficiency: Studying in the USA or UK can provide Indian engineering graduates with an opportunity to improve their English language proficiency, which is essential for communication in the global marketplace. Fluency in English is also highly valued by employers, making it an important skill for engineering graduates to possess. Research Opportunities: Both the USA and UK are known for their research-intensive universities and institutions, which provide students with opportunities to work with leading researchers and academics in their fields. Studying in these countries can give Indian engineering graduates the chance to participate in cutting-edge research projects and gain valuable research experience. Overall, studying in the USA or UK can be a great way for Indian engineering graduates to gain a competitive edge in the global job market and build a successful career in the engineering field. What entrance international exams are required for studying abroad? The entrance international exams required for studying abroad vary depending on the destination and the course you wish to pursue. Common exams include the TOEFL (Test of English as a Foreign Language), IELTS (International English Language Testing System), SAT (Scholastic Assessment Test), GRE (Graduate Record Examination), and GMAT (Graduate Management Admission Test). Our consultants will guide you through the exam requirements and provide assistance in exam preparation. How can you help with the visa application process? Our consultancy provides comprehensive guidance throughout the visa application process. We will assist you in understanding the visa requirements, preparing the necessary documents, filling out application forms accurately, and ensuring a smooth submission process. Our team will also provide valuable tips and advice for visa interviews, helping you increase your chances of obtaining a student visa. What post landing services do you offer to students? We understand that transitioning to a new country can be challenging, which is why we offer post landing services to support students during their initial phase abroad. Our post landing services include airport pickup, accommodation assistance, orientation programs, guidance on local transportation, and information on essential services such as banking, healthcare, and student support networks. We aim to ensure a seamless transition and help you settle comfortably in your new environment. Do you provide scholarships or financial aid assistance? While we do not offer scholarships directly, we provide guidance and information about various scholarship opportunities and financial aid options available for international students. Our experienced consultants will assist you in exploring scholarships offered by universities, governmental organizations, private foundations, and other sources to help make your education abroad more affordable. Do you provide scholarships or financial aid assistance? While we do not offer scholarships directly, we provide guidance and information about various scholarship opportunities and financial aid options available for international students. Our experienced consultants will assist you in exploring scholarships offered by universities, governmental organizations, private foundations, and other sources to help make your education abroad more affordable. What are the admission requirements for studying abroad? Admission requirements vary depending on the country and educational institution you are applying to. Typically, requirements include academic transcripts, letters of recommendation, a statement of purpose, standardized test scores, and proof of English language proficiency. Our consultants will guide you through the specific requirements for your chosen destination and assist you in preparing a strong application. How long does the admissions process take? The duration of the admissions process can vary based on several factors, such as the country, university, and program you are applying for. Generally, the process can take several months from the time of application submission to receiving an admission decision. Our team will help you stay on track with application deadlines and ensure a timely submission to maximize your chances of acceptance. Can you help with course selection and university comparisons? Absolutely! We offer personalized assistance in course selection based on your academic background, interests, and career goals. Our consultants will provide information about various universities and programs, helping you make informed decisions. We can also assist you in comparing universities, considering factors such as rankings, curriculum, faculty expertise, campus facilities, and student support services. Do you provide support for English language proficiency exams? Yes, we provide support for English language proficiency exams such as TOEFL and IELTS. Our consultants can offer guidance on exam preparation strategies, recommend study materials, and provide practice resources. We aim to help you achieve the required scores to meet the language proficiency requirements of your chosen university. What additional services do you offer apart from admissions? In addition to admissions support, we offer a range of supplementary services to enhance your study abroad experience. These include assistance with scholarship applications, guidance on obtaining health insurance, advice on travel and accommodation arrangements, cultural orientation programs, and ongoing support throughout your study period. Our goal is to provide comprehensive support for every aspect of your journey. Can you help with the process of transferring to a foreign university? Yes, we can assist with the process of transferring to a foreign university. Our consultants will evaluate your academic transcripts, guide you through the transfer requirements, and help you find suitable universities that accept transfer students. We will also provide support in preparing your application materials and ensuring a smooth transition to the new institution.",
      link: "/admissions/management"
    },

    {
      name: "Study Abroad Consultants in Bangalore | Overseas Education | Svvidesh",
      description: "Abroad admission consultants - Grab SV Vidya's comprehensive list of universities abroad, carefully curated by our expert education consultants. Find your dream university &amp; let us guide you through the admissions process. SVV Abroad University Admission List USA Canada UK Germany Dubai Italy Australia Netherlands Ukraine China France Estonia Hungary Lithuania Ireland Singapore France Philiphines Countries : USA UM-Dearborn Univ of Cincinnati University of Alabama at Birmingham University of Arlington University of Central Missouri University of Colorado, Denver University of Houston University of Massachusetts Boston (UMass Boston) University of New Haven University of North Texas University of South Florida Adelphi Arizona State University California State University East Bay and CAL State - Riverside Eastern Illinois Findlay, Johnson and Wales Florida Atlantic University George Mason University PACE University Purdue University Texas A &amp; M University Corpus Cristy UK Teesside University The University of Sheffield University College London University of Central Lancashire University of Dundee University of Hertfordshire University of Leeds University of North London University of Nottingham University of Strathclyde Queen`s University Belfast Swansea University Anglia Ruskin Aston University Brunel University Londo Coventry University (London Campus) Durham University Leeds International Study Center Manchester Metropolitan University New Castle Northumbria University Queen Mary University of London Germany ISM – International School of Management IUBH RWTH International Academy SRH Heidelberg University of Kiel TU Dresden TUM University of Bonn University of Siegen Darmstadt Business School Fachhochschule des Mittelstands (FHM) FH Aachen University of applied Science Frankfurt University of Applied Sciences Hochschule Aalen Hochschule Karlsruhe University of Applied Sciences Others Canada : Canadore College University of Ottawa Cambrian College Algonquin Centennial Lambton Evergreen college Italy : University of Padua Universita Di Siena Vesuvio International Sch ool of Hospitality University of Padua France : College De Paris Hungary : International Business School Ireland : Dundalk Institute, UCD. Estonia : Tallinn University of Technology Philiphines : Our Lady Fatima University AMA Angeles Foundation University Perpetual Help Australia : Monash University Deakin University Netherlands : Rad boud University University of Groningen University of Twente Enschede Dubai : BITS Pilani - Dubai Campus Manipal University China : China Medical University Sichuan University Lithuania : VGTU Singapore : Raffels, Amity University Ukraine : Ivano Frankivisk NMU Kharkiv National Medical University NMU Bogomolets National Medical University Vinnytsa National Medical University LVIV",
      link: "/admissions/arts-sciences"
    },

    {
      name: "Management | Svvidesh",
      description: "SV Videsh Vidya offers expert guidance and coaching for management studies, helping you achieve your goals of pursuing a career in business. Our education consultants are here to guide you every step of the way. Visit our management page today and take the first step towards your dream career! Management Business Management courses have evolved in recent years as per the demands of changing business scenarios, scaling heights of globalization in developing economies as well as the developed, and the startups mushrooming in various parts of the world. Apart from the ever so present MBA programs, options in the field of Management Abroad has grown many folds. Students from India are taking up specialized courses to hone their business skills right after Senior secondary year. This gives them an early advantage to learn and understand different facets of Business and Management. Plenty of overseas Business and Management courses are available at Undergraduate as well as Post graduate level. These are available at affordable costs and are packed with an international curriculum as well as Internships. Some of the courses/modules covered under Management are: Study Abroad Options for Business and Management: Prime destinations for business &amp; management overseas education for Indian students are in countries like New Zealand, UK, Canada, Australia, Singapore, USA, Europe and Ireland. Depending on the courses and budget, students can decide to pursue management courses from one of these countries. New Zealand and Canada are the prime desti nation for Business Administration or business management courses in bachelor’s for study abroad Indian students ; Singapore, Dubai, Australia is second in favorites for bachelor’s; Then comes UK and USA. Postgraduate Business and Management courses abroad are certainly the top choice for Indian students to attain quality education at affordable cost. Bachelors and Masters Courses Available: Diverse programs under Business &amp; Management abroad, offer different specializations and degree options for Indian stud ents. They are offered as BA , MA, Bachelors / Masters etc. • Commerce, Business and Administration • Banking, Insurance, Risk Management, Taxation • Business Analytics, Management Consulting • Business Management, Business Administration, Entrepreneurship, • Innovation, Operations, Project Management, Event Management, • Organizational Management, Health Management • Commerce • Conflict Analysis and Management • Finance, Accounts, Commerce, Economics • Financial Management, International Management, Marketing Management, Technical Management: • Hospitality and Tourism Management • Human Resource Management, Human Resource Development • Information Systems, Information Technology Management • International Business • Logistics, Supply Chain Management • Office Administration • Real Estate, Property Administration • Sales, Marketing, Public Relations, Public Services, E-business, Digital Business, Digital Marketing: • International Business/Design &amp; Innovation/International Trade • Transportation, Transportation Management • Library Management • Exhibition Management, Event Management • Hospital Management, Healthcare Management • Sports Management Duration of Education: Most programs in Business Management are 1 year to 3 year long. Post graduate students prefer to go for 1 -2 year programs whereas Undergraduate students pursue 2-3 year long courses along with Internships at various companies. MBA in UK MBA in USA",
      link: "https://training.svvideshvidya.com/"
    },

    {
      name: "Duolingo online - ✅Duolingo English Test | Svvidesh",
      description: "Duolingo English Test- Learn a new language with SVVidesh Vidya's expert Duolingo coaching. Our Duolingo online is here to guide you every step of the way. DUOLINGO The Duolingo English Test (DET) is an online English proficiency exam that has gained recognition by several universities in India as an alternative to traditional English proficiency tests like TOEFL and IELTS. The test measures a student's proficiency in reading, writing, listening, and speaking skills. One of the advantages of the DET is that it is flexible and can be taken online from the comfort of the student's home. Another advantage is that it provides quick results, typically within 48 hours, which makes it an ideal choice for students who need to meet strict admission deadlines. To prepare for the DET, students can use the Duolingo language learning app itself, as it provides a comprehensive study program that can help develop proficiency in English. Additionally, students can supplement their preparation by reading books, watching English language movies and TV shows, and engaging in conversation with native speakers. To improve their speaking skills, students can practice speaking in English with their friends or take part in language exchange programs. It is also essential for students to familiarize themselves with the format of the DET exam and practice with sample questions. The Duolingo website provides free sample tests that students can take to get an idea of the exam's structure and types of questions. Regular practice can help improve their time management skills, accuracy, and confidence. In conclusion, the Duolingo English Test is an alternative English proficiency exam that can help students gain admission to universities abroad, and students can prepare for it by using the Duolingo app, practicing speaking with native speakers, familiarizing themselves with the exam format, and taking sample tests.",
      link: "/training-time-table"
    },

    {
      name: "Post Landing Services | Svvidesh",
      description: "Post Landing Services We offer Pre-Departure Briefing. Support in Transferring the Tuition Fees. Airport Pickup. Arranging Accommodation. Purchasing Health Insurance. Arranging / Accommodation Booking. Opening Overseas bank account.",
      link: "/spoken-english"
    },

    {
      name: "Admission | S V Videsh Vidya Enterprises",
      description: "SV Videsh Vidya offers comprehensive admissions services to help you secure a place in your dream university abroad. Our consultants provide personalized guidance throughout the application process, ensuring your success including for MS without GRE. Visit our Admissions page and take the first step towards a brighter future! ADMISSIONS I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Open House Information I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors. Make your company stand out and show your visitors who you are. Prospective Parents &amp; Students I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. FOR MORE INFORMATION E-MAIL US info@mysite.com CALL OUR MAINLINE 123-456-7890",
      link: "/duolingo"
    },

    {
      name: "🗣️French Language Course - 100% Basic French language course | Svvidesh",
      description: "Svvidesh offers comprehensive French language courses to help you prepare for studying abroad in French-speaking countries. Our experienced educators provide personalized support to ensure your success in basic French language courses. French Language French is one of the most widely spoken languages in the world, with over 300 million speakers across the globe. It is an official language in 29 countries, including France, Canada, Switzerland, and Belgium. Learning French can be extremely beneficial for Indian students who wish to pursue their higher education in France or other French-speaking countries, as well as for those who want to work or settle in these countries. One of the primary benefits of learning the French language is that it can increase the chances of getting admitted to French universities. Many universities in France offer courses in French language, and a good knowledge of the language can help students in communicating with their professors and classmates, and in understanding the course material better. Moreover, French is also an important language in the field of international business and diplomacy. Many international organizations and institutions, such as the United Nations, UNESCO, and the European Union, use French as one of their official languages. Therefore, a good knowledge of French can open up opportunities for Indian students to work in these organizations or in other international companies where French is widely spoken. In addition to academic and career opportunities, learning French can also enhance the overall cultural experience of studying abroad in France or other French-speaking countries. Knowing the language can help students interact with locals, understand the local culture, and explore the country beyond the tourist destinations. To conclude, learning the French language can be extremely beneficial for Indian students who wish to pursue their higher education or career in France or other French-speaking countries. It can increase the chances of getting admitted to French universities, open up career opportunities, and enhance the overall cultural experience. Therefore, it is highly recommended for Indian students who are interested in studying abroad in France or other French-speaking countries to learn the French language. nch for beginners",
      link: "/ielts"
    },

    {
      name: "GRE Coaching Near You - GRE Live Classes | Svvidesh",
      description: "SV Videsh Vidya offers expert coaching for the GRE exam, helping you achieve your goals of studying abroad. Our GRE page today to learn more about our services and prepare for success. GRE Exam The Graduate Record Examination (GRE) is a standardized exam that is commonly used for admission to graduate-level programs in universities and colleges, including in India. The exam is divided into three main sections: Analytical Writing, Verbal Reasoning, and Quantitative Reasoning. The exam duration is approximately three hours and 45 minutes, and is conducted online or at designated test centers. The Analytical Writing section requires the student to write two essays, an Issue essay and an Argument essay, within 60 minutes. The Verbal Reasoning section includes two 20-question sets, and tests the student's ability to analyze and understand written material, to identify relationships among parts of sentences, and to understand and analyze the meanings of words and concepts. The Quantitative Reasoning section includes two 20-question sets, and tests the student's ability to understand and analyze quantitative information, and to apply basic mathematical concepts to solve problems. To prepare for the GRE exam, students can use official GRE resources such as the GRE website, which provides free practice tests and sample questions. Additionally, students can work on improving their analytical writing skills by practicing writing essays, and can improve their verbal and quantitative reasoning skills by reading extensively, practicing math problems, and taking timed tests. The GRE exam is conducted throughout the year at various test centers across India, and students can choose the test date and location that best suits their needs. It is recommended that students register for the exam well in advance to avoid any last-minute rush. In conclusion, the GRE exam is an essential requirement for students who wish to pursue graduate-level programs in universities and colleges, and students can prepare for it by using official GRE resources, improving their analytical writing, verbal reasoning, and quantitative reasoning skills, and registering well in advance for the exam. The exam's structure is designed to test the student's ability to analyze and understand written and quantitative material, and it is important for students to focus on each section while preparing for the exam.",
      link: "/toefl"
    },

    {
      name: "Our Students Say | Svvidesh",
      description: "Don't just take our word - hear what our students have to say about their experience with SV Videsh Vidya. Our education consultants have helped countless students achieve their dream of studying abroad. Visit our \"Our Students Say\" page today and hear firsthand accounts of the SV Videsh Vidya. Ratings S V Videsh Vidya Enterprises Rating: 4.8 · 67 votes - British School of language Our Students say \"Really good guidance and services provided. They have tie-ups with various universities across the world. Trainings provided for exams like GRE IELTS are really good and worth paying the money. Had a wonderful and very satisfying experience. I would totally suggest people to go for SVV if they are interested in foreign education.\" Rakesh \"Good one for GRE IELTS; they have tie-ups with good Universities across the world and it's worth the penny. Nice experience with the Enterprise.\" Toshif Gugihal \"SV Videsh Vidhya made the entire process of higher education travel easy and hassle-free. GRE training was also really good. They even helped with the visa process. Thank you!!!.\" Anusha Guruprasad \"Really good guidance and services provided. Had a wonderful and very satisfying experience. I would totally suggest people to go for SVV if they are interested in foreign education.\" Shilpa Telasang \"Best Career counselling, very helpful in clearing any doubts regarding the test preparation too.... Trainings provided for exams like GRE IELTS are really good and worth paying the money.... Had a wonderful and very satisfying experience. Highly appreciate the systematic approach, personal attention, experienced faculties...The staff is so talented and have great knowledge regarding everything. Their admission procedure is very simple and is done easily. The staff is so helping that it just eases the admission procedure..... Definitely I would recommend S V Videsh for Test preparation and study abroad services .....\" Sachin N \"They provide excellent guidance and services to students who want to build their career in abroad. They have tie-ups with various universities across the world. Trainings provided for exams like GRE IELTS are really good and worth paying the money. Had a wonderful and very satisfying experience. I would totally suggest people to go for SVV if they are interested in foreign education. Genuinely we can trust them.\" Basu Nuchhi \"SV Videsh Vidya turns out to be one of the best institutes for IELTS. Their admission process is quite straightforward. With adequate study material, they have a friendly faculty as well, ready to resolve issues and problems instantly. I strongly recommend them for IELTS education.\" Himanshika Sharma \"S V Videsh Vidya offers best GRE training. The staff is so talented and have great knowledge regarding everything. Their admission procedure is very simple and is done easily. The staff is so helping that it just eases the admission procedure.\" Safa Patel \"I am very happy with the services offered for IELTS training. The instructor has good knowledge and guided me to overcome my language difficulties by giving personalised feedback in all modules of IELTS. They also host mock tests which help to get comfortable with the exam format so you can perform better.\"Navya Melam Veena was very encouraging and motivating. She understood the requirements of my son and guided him with patience. Her follow ups were prompt. I appreciate her commitment. Nalini Jayanthi Best Career counselling and study abroad Consultancy in BTM layout. Veena Ma'am have a very organized approach in each steps sothat students will get their dream University. She is very helpful in clearing any doubts regarding the test preparation too. Definitely I would recommed S V Videsh for Test preparation and study abroad services...!! :) Suneet Kumar Gupta S V Videsh Vidya provides excellent coaching and prepares the students for GRE. Highly appreciate the systematic approach, personal attention, experienced faculties, attention to detail given during the GRE preparation. Besides their admission process is simple and smooth. Highly recommended for GRE coaching. Aparna K Positive: Communication, Professionalism, Quality, Value S V Videsh Vidya offers best GRE training.There admission procedure is very simple and is done easily. The staff is so helping that it just eases the admission procedure. Krunal Surve I visited SV Videsh Vidya in 2017 Aug and registered for German Lang , IELTS and GRE training. They have the best faculties for all courses and I got admission in 2 Univs in Australia, 1 each in France, Germany and 4 Univ in USA. Finally I decided to choose Univ in USA. From my experiences I find they are very honest and give best services from counseling till I travelled to USA. Good Luck to SVVV and their team for their future endeavours. Roopa Reddy Best SAT training organization - Had a great experience while availing the training - the admission process is really smooth and simple - one can contact them via website. The Trainers are awesome Verbal Trainer : Priya is the best i have ever met and so do Quants Trainer- Gaurav . I recommend all to take this training soon from this institute. Amrita Gupta The training that are provided here are very useful and beneficial to all students , specially beginers.The tutors for both gre and IELTS are very good and takes care of each individual.Specially Thankful to Priya mam for gre verbal and IELTS .The way of her training towards each individual student is marvellous and the techniques which are provided by them are very much useful. The guidance provided by veena mam is very useful. I would suggest this is good place to people who want to get train for GRE and IELTS Rashmitha Byreddy The IELTS training provided by SV Videsh Vidya is highly organized and comprehensive mingled with a perfect and comfortable ambience. Besides, the admission process is also quite easy and convenient. Atharva IELTS: The training for IELTS is good and the tutor is well-experienced in teaching the methodology involved to answer the different sections. GRE: Verbal is also taught by the same IELTS tutor so it's also good you will learn a lot of techniques. Quants part is taken by a different tutor he is good and experienced too. Abi Ulaganathan I would like to say a few words about S V Videsh Vidya. Primarily, I would like to praise their amazing GRE training system. It’s really the best GRE program in the country. Also the admission procedure is really friendly and simple. Arnob Sanyal With more than 8 years of teaching experience each, Gaurav (quants) and Priya (verbal) will make sure you get the maximum out of your GRE preparation. Admission process is customer friendly, fee is quite reasonable along with provision of flexible hours. Strongly recommended. Chandrima Sanyal If you are having any plans to study abroad, get trained in IELTS or GRE or any language ability test, this institute help you intensively by scheduling and meeting the requirements of a student. On the other hand, tutor helps you to understand the concepts right from the roots, he also assess the student in an individual approach and then understands and structure the lessons according to the student's ability by adjusting the way of teaching, by adjusting the pace and time required to cover the lessons, conducting several real- time mock tests, by sharing 100's of tips and strategies and later push an individual to apply it practically etc this benifited me as an individual and students in whole Ashray Krishna Pursuing MS in supply chain management in Germany because of S V Videsh Vidya. I had lost all hopes in my final year because of some other consultants misleading me. Then I joined SV Videsh which helped me in realising my goal. Their fast track IELTS and timely documentation assistance along with visa process was swift and apt. It was time sensitive and finally I can heartily say that it was the best decision to come to sv videsh vidyaa. Kudos to SVV team. Darshan HV I approached SV Videsh Vidya to know more about their MBBS admission process abroad for my sister and was extremely happy with the way they guided us. Right from helping us shortlist the colleges based on her profile to informing us about the documents necessary for the application, SV Videsh Vidya acted like a guiding star for us. Shilpita Roy Good guidance by Priya for IELTS examination. She accomodated my requests for flexible timings for the classes and individual attention helped me improve and score an overall 8 in the month of October 2018. Thanks a lot.. Pushpa Reddy Took the IELTS coaching here, from Arun sir. The classes were good and syllabus was completed in around 7 classes as requested, leaving enough time for practice and mock tests. Kavya Sahithi I took IELTS classes and applied for admissions in Canada successfully through SVV. Overall happy to apply through them. Best thing charges are very reasonable. Manisha Shetty Very prompt in their service and rightly suggested universities based on my profile. Excellent tutor for IELTS coaching also. Best consultants for Canada. God son S V Videsh Vidya is an amazing abroad consultancy for people who are passionate in their career building path. They allows us to choose the right path for our brighter future and the tutors are well experienced. Sv videsh vidya is the best place ever I have seen and very lucky to be part of it. Srikanta Sowmya SV Videsh Vidya understands the individual student needs. They guide the medical aspirants at every step while taking admission to medical colleges abroad. I would highly recommend this company! Ishita Ganguly I thank you for your kind and excellent services provided to me from the beginning till the end. Thank you for helping me in getting admission for MS in Italy. I appreciate your services and admire your knowledge in all programs , countries and various options students can get in pursuing higher education abroad. Wish you good luck! Sanjay K It was a pleasure to meet Veena and team. Veena is extremely helpful, very knowledgeable and has a ‘can do’ attitude. She does not leave any stone unturned, gives all options possible to the students as per their interest, needs and their aptitude. She gives advise very sincerely. I wish her all the success and to keep up the excellent contribution to society Vij K I had approached videsh vidya in 2017 and was very late to apply. My success is because of their immediate responses to my profile and . their team is not big but was very effective for personal attention to my applications. Saved lot of money and time and got admission in UCD. A big thanks to their team for their support. Hanushya P The only consultant who gives genuine guidance and suggest correct Universities gets admissions in all the Univs that they suggest. Very approachable and answers calls anytime Vikas I completed my IELTS General course in SV VIDESH VIDYA institute on 15th March 2020 .Teaching experience was good and experienced faculties handle the class, for an average English speaker like me the institute and faculty members were very helpful and they assured they will guide me till I get the expected score Thank you all once again Wasim Sajid SVV is a good institution .If any one have a idea of abroad education then this is the best institution Shantesh One of the best place to take guidance. Well experienced and explained each and every query. I recommend students for seeking abroad education. Shobha Bhat Very personalised help provided. Very approachable and friendly Arjitha B I had approached videsh vidya in 2017 and was very late to apply. My success is because of their immediate responses to my profile and . their team is not big but was very effective for personal attention to my applications. Saved lot of money and time and got admission in UCD. A big thanks to their team for their support. Mudassir Hasan took IELTS classes and applied for admissions in Canada successfully through SVV. Overall happy to apply through them. Best thing charges are very reasonable. Manisha You will definitely get benefit and improvement in your english from this coaching. Srikar kumar It offered me flexible coaching hours and one to one coaching. Good service. Ann Issac SV Videsh Vidya understands the individual student needs. They guide the medical aspirants at every step while taking admission to medical colleges abroad. I would highly recommend this company! Ishita Ganguly \"This institute has helped me achieve my goal of clearing IELTS.I scored 8/9 in IELTS Exams and it happened only because of proper guidance of the faculties of S V Videsh Vidya Academy.They provide proper guidance to the students and teach in orderly manner which makes it easier for the students to understand the concepts.\" Narsimha attended IELTS Coaching Good communication and great help in getting admissions pls do come here keshav rana \"The teachers here are very nice and are good at their jobs.The management is also good,but it needs to improve at some areas.\" Skanda attended German Language \"I have enrolled myself for German language classes.The teachers here are good.Also the management is quite supportive.\" Akarsh attended German Language \"The tutors here are very good.They clears the doubts efficiently.I have seen a significant improvement in my knowledge about the language.\" Abilash attended German Language \"I attended the institute for GRE preparation.The teachers here are very good.They use simple language for teaching which helps us a lot.Also,periodic tests are conducted which helps us improved a lot.\" Sushmitha attended GRE Coaching \"At S V Videsh Vidya , they help you plan your studies abroad and provide counseling. They are very transparent in the process and tell if we meet all the criteria to get an admission or not. Along with applying to universities , they also help with finding good language classes and preparing other documents required. Mrs. Veena at S V Videsh Vidya Enterprises is a very helpful person. This is a reliable institute which I did suggest to others. \" Shwetha attended Career counselling for studies abroad \"The teacher Vidya has impressive teaching skills in German , the classes are lively n they are so flexible. There are no limitations regarding to teaching hours...... They make sure we understand well n half way thru the A1 course....... We were already writing paragraphs in German n speaking basic German which was otherwise a Herculean task. \" Dr Arshia Shariff attended German Language \"S V Videsh Vidya is one stop solution for all your needs for information and training to study abroad. I Highly recommend everyone. \" Viraj Pangam attended IELTS Coaching \"Mrs Veens was very helpful in finding me a suitable university and also helped me in securing my admission to the very prestigious Sichuan University in China. I am very glad to have approached Mrs Veena for advice on furthering my education. \" Jeetendra attended SAT Coaching ...",
      link: "/sat"
    },

    {
      name: "Contact | Svvidesh",
      description: "Get in touch with the experts at SV Videsh Vidya for all your study abroad needs. Our team of education consultants is here to answer your questions and guide you through the process. Contact us today to learn more about our services and how we can help you achieve your dreams of studying abroad. CONTACT US Visit the Office ADDRESS 4, 1st Main Rd, 1st Cross, MICO Layout, BTM Stage 2, Bengaluru, Karnataka 560076 E-MAIL US enquiry@svvideshvidya.com CALL OUR MAINLINE +91 9739 722211 +91 97397999 96 OFFICE HOURS Monday - Saturday Weekly Holiday - Sunday 10:30 am - 6:00 pm Lunch Hours - 1 PM to 2 PM You Can Also Contact Us by Form First Name Email Last Name Phone Message Submit Thanks for submitting!",
      link: "/contact"
    },

  ];

  // Handle Search Input
  const handleSearch = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.trim() === "") {
      setFilteredResults([]);
      return;
    }

    // Filter menu items and submenus based on name and description
    const results = searchItems.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    ).map(item => ({ name: item.name, link: item.link }));

    setFilteredResults(results);
  };


  // Handle Search Selection
  const handleSelect = (path) => {
    navigate(path);
    setQuery("");
    setFilteredResults([]);
  };

  // Hover Handlers for Desktop Dropdown
  const handleMouseEnter = (index) => setOpenDropdown(index);
  const handleMouseLeave = () => setOpenDropdown(null);

  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-4 relative">
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Search Bar */}
        <div className="hidden md:flex flex-grow max-w-sm relative">
          <div className="flex items-center border-b border-gray-400 w-56 ml-4">
            <FaSearch className="text-gray-500 mx-2" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={handleSearch}
              className="w-full py-2 px-2 outline-none bg-transparent text-gray-700"
            />
          </div>

          {(filteredResults.length > 0 || query.trim() !== "") && (
            <ul className="absolute text-sm top-full left-0 mt-2 w-64 bg-white border border-gray-300 shadow-xl rounded-lg z-10 
                 max-h-[250px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 
                 backdrop-blur-md bg-opacity-90">

              {/* Show results if available */}
              {filteredResults.length > 0 ? (
                filteredResults.map((result, index) => (
                  <li
                    key={index}
                    onClick={() => handleSelect(result.link)}
                    className="flex items-center gap-2 px-4 py-3 cursor-pointer 
                     hover:bg-gradient-to-r from-[#1A152D] to-[#4e60ff] hover:text-white 
                     whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 ease-in-out"
                  >
                    <FileSearch className="text-gray-500 w-4 h-4" /> {/* Document Search Icon */}
                    {result.name}
                  </li>
                ))
              ) : (
                <li className="flex items-center gap-2 px-4 py-3 text-gray-500 bg-gray-100 cursor-default text-center font-semibold">
                  <Inbox className="text-gray-400 w-5 h-5" /> {/* Empty Inbox Icon */}
                  No Content
                </li>
              )}

              {/* Show "Search for {query}" only if results exist */}
              {filteredResults.length > 0 && (
                <>
                  <hr className="border-gray-300 my-1" />
                  <li
                    onClick={() => navigate(`/search?query=${encodeURIComponent(query)}`)}
                    className="flex items-center gap-2 px-4 py-3 text-indigo-600 cursor-pointer hover:bg-gray-100 font-semibold text-center"
                  >
                    <Search className="text-indigo-500 w-4 h-4" /> {/* Search Icon */}
                    Search for "<span className="font-bold">{query}</span>"
                  </li>
                </>
              )}
            </ul>
          )}
        </div>


        {/* Logo Section */}
        <div className="flex items-center space-x-2 ml-40">
          <a href="/">
            <img
              src="https://static.wixstatic.com/media/edbce3_7aacc3e198e747b5ab6e7a81308ec95e~mv2.png/v1/fill/w_179,h_86/logo.png"
              alt="SV Videsh Vidya Logo"
              className="w-40 h-auto"
            />
          </a>
          <div className="flex flex-col">
            <h1 className="text-lg font-extrabold bg-gradient-to-r from-[#1A152D] to-[#4e60ff] text-transparent bg-clip-text">
              SV Videsh Vidya
            </h1>
            <p className="text-xs font-semibold text-gray-500">
              Study Abroad Experts
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-[#1A152D] text-white shadow-lg">
          <div className="flex flex-col py-4 px-6 space-y-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                {/* If item has a submenu, render a button */}
                {item.subMenu ? (
                  <div className="flex">
                    <Link
                      to={item.link}
                      className="flex justify-between text-left w-1/3 py-2 font-semibold text-white hover:text-yellow-300"
                      onClick={(e) => {
                        if (item.onClick) {
                          item.onClick(e); // Call function if defined
                        }
                        setMobileMenuOpen(false); // Close menu
                      }}
                    >
                      {item.name}
                    </Link>

                    <span
                      className="hover:text-yellow-400 cursor-pointer w-2/3 text-right"
                      onClick={() =>
                        setMobileDropdown(mobileDropdown === index ? null : index)
                      }
                    >
                      {mobileDropdown === index ? "▲" : "▼"}
                    </span>
                  </div>
                ) : (
                  // If no submenu, render a Link instead of a button
                  <Link
                    to={item.link}
                    className="block py-2 font-semibold text-white hover:text-yellow-300"
                    onClick={(e) => {
                      if (item.onClick) {
                        item.onClick(e); // Call function if defined
                      }
                      setMobileMenuOpen(false); // Close menu
                    }}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Mobile Dropdown Menu */}
                <AnimatePresence>
                  {item.subMenu && mobileDropdown === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="pl-4 space-y-2 overflow-hidden"
                    >
                      {item.subMenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.link}
                          className="block text-gray-300 hover:text-yellow-300 transition"
                          onClick={(e) => {
                            if (subItem.onClick) {
                              subItem.onClick(e); // Call function if defined
                            }
                            setMobileMenuOpen(false); // Close menu
                            setMobileDropdown(null); // Close dropdown
                          }}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </nav>
      )}



      {/* Desktop Navigation */}
      <nav className="hidden lg:flex bg-gradient-to-r from-[#1A152D] to-[#6B4EFF] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={item.link || "#"} className="hover:text-[#1A152D] px-4 py-2 block hover:bg-yellow-300 font-semibold transition">
                {item.name}
              </Link>

              {/* Dropdown */}
              <AnimatePresence>
                {item.subMenu && openDropdown === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="absolute left-0 top-full bg-[#1A152D] text-white shadow-lg rounded-lg mt-1 min-w-[200px] z-50"
                  >
                    {item.subMenu.map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subItem.link}
                        onClick={subItem.onClick}
                        className="block px-4 py-2 hover:bg-yellow-300 hover:text-[#1A152D] hover:font-semibold hover:scale-105 transition-transform ease-in-out duration-300 whitespace-nowrap"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>


            </div>
          ))}


        </div>
      </nav>
    </header>
  );
};

export default NavbarComponents;
