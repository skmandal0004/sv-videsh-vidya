import React, { useEffect, useState } from "react";

const TimeTable = () => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("Loading..."); // Default text while loading

  useEffect(() => {
    fetch("http://localhost/image-upload-api/get-files.php", {
      mode: "cors", // Ensure CORS is enabled
    })
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.files || []);
        setTitle(data.textInput + " Live Classes Schedule" || "Live Classes Schedule"); // Use fetched text or default
      })
      .catch((err) => console.error("Error fetching files:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-6">
      <h2 className="text-4xl font-extrabold text-indigo-600 mb-6">
        {title} {/* Dynamic title from API */}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 w-full">
        {files.map((file, index) => {
          const isPDF = file.toLowerCase().endsWith(".pdf");
          return (
            <div
              key={index}
              className="flex justify-center items-center bg-gray-100 p-2 rounded-lg transition-all duration-500 ease-in-out transform hover:bg-white px-10 py-5"
            >
              {isPDF ? (
                <iframe
                  src={file}
                  title={`PDF Preview ${index + 1}`}
                  className="w-full h-[400px] border rounded-lg"
                />
              ) : (
                <img
                  src={file}
                  alt={`Uploaded Image ${index + 1}`}
                  className="w-full h-auto max-h-screen object-contain rounded-lg"
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeTable;
