import React, { useEffect, useState } from "react";

const TimeTable = () => {
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState("Loading..."); // Default text while loading
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    fetch("https://sphpvt.com/SVvideshApi/get-files.php", {
      mode: "cors", // Ensure CORS is enabled
    })
      .then((res) => res.json())
      .then((data) => {
        setFiles(data.files || []);
        setTitle(data.textInput ? `${data.textInput} Live Classes Schedule` : "");
      })
      .catch((err) => console.error("Error fetching files:", err))
      .finally(() => setLoading(false)); // Stop loading
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4 md:p-6">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6 text-center">
        {title} {/* Dynamic title from API */}
      </h2>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex items-center justify-center my-6">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500"></div>
        </div>
      )}

      {/* No Files Message */}
      {!loading && files.length === 0 && (
        <p className="text-lg text-gray-500">No files available at the moment.</p>
      )}

      {/* Display Files in One Column */}
      <div className="w-full max-w-7xl flex flex-col items-center gap-6">
        {files.map((file, index) => {
          const isPDF = file.toLowerCase().endsWith(".pdf");
          return (
            <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden p-4 w-full">
              {isPDF ? (
                <div className="w-full">
                  <iframe
                    src={file}
                    title={`PDF ${index + 1}`}
                    className="w-full h-[500px] border rounded-lg"
                  />
                  <div className="mt-4 flex justify-center">
                    
                  </div>
                </div>
              ) : (
                <img
                  src={file}
                  alt={`Image ${index + 1}`}
                  className="w-full max-h-[600px] object-contain rounded-lg"
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
