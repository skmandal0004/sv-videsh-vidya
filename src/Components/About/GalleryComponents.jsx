import React, { useState } from "react";

const GalleryComponents = () => {
  const [images, setImages] = useState([
    // "https://media.istockphoto.com/id/1351018006/photo/smiling-male-student-sitting-in-university-classroom.jpg?s=612x612&w=0&k=20&c=G9doLib_ILUijluTSD5hstZBWqHHIcw4dBHhQcs-ON4=",
    // "https://i.pinimg.com/736x/33/3e/9d/333e9d586234fe677657d1360adc3a73.jpg",
    // "https://www.cecil.edu/wp-content/uploads/meet-with-admissions-02.jpg",
    // "https://media.istockphoto.com/id/1409086761/photo/attractive-student-girl-standing-in-library-showing-thumbs-up.jpg?s=612x612&w=0&k=20&c=z481JH_-8nlQ7TP2FwA5F9KuGJgM1jlhDi7Zu1Udj5U=",
    // "https://www.shutterstock.com/image-photo/high-school-principal-using-digital-600nw-2339228201.jpg",
    // "https://media.istockphoto.com/id/170036830/photo/students-at-the-lecture.jpg?s=612x612&w=0&k=20&c=DgJcrCRpj83Uc55daWfv2JEFH_fn4OeyUdr9PODBqxg=",
    // "https://media.istockphoto.com/id/1588288383/photo/back-view-of-student-raising-his-hand-to-answer-teachers-question-during-education-training.jpg?s=612x612&w=0&k=20&c=ZSyPrLqe6WdE81WXiESD5AqIVw1a7hKv85UI5I-Vwco=",
    // "https://www.deepjunglehome.in/wp-content/uploads/2024/01/camping-trips-for-college-2.jpg",
    // "https://www.shutterstock.com/image-photo/group-college-students-performing-experiment-600nw-1892185093.jpg"
    div
  ]);

  const [imageUrl, setImageUrl] = useState("");

  const handleAddImage = () => {
    if (imageUrl.trim() !== "") {
      setImages([imageUrl, ...images]);
      setImageUrl(""); // Clear input field
    }
  };

  return (
    <div className="bg-gray-100 py-12 px-6 md:px-12 text-center">
      <h1 className="text-3xl font-semibold text-black mb-8">Gallery</h1>

      

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryComponents;
