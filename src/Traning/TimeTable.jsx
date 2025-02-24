import React, { useEffect, useState } from "react";

const TimeTable = () => {
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("Loading..."); // Default text while loading

  useEffect(() => {
    fetch("http://localhost/image-upload-api/get-images.php", {
      mode: "cors", // Ensure CORS is enabled
    })
      .then((res) => res.json())
      .then((data) => {
        setImages(data.images || []);
        setTitle(data.textInput); // Use fetched text or default
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-6">
        {title} Live Classes Schedule {/* Dynamic title from API */}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 w-full px-4">
        {images.map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white p-2 rounded-lg shadow-lg transition-transform transform hover:scale-105"
          >
            <img
              src={src}
              alt={`Uploaded Image ${index + 1}`}
              className="w-full h-auto max-h-screen object-contain rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeTable;
