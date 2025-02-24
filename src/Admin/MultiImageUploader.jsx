import React, { useState } from "react";
import { FiUploadCloud } from "react-icons/fi";
import { motion } from "framer-motion";

const MultiImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const handleImageChange = (event) => {
    const files = event.target.files;
    if (files) {
      setSelectedImages([...files]);
    }
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) {
      setMessage("Please select at least one image to upload.");
      return;
    }

    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("images[]", image); // Use 'images[]' for multiple files
    });

    setUploading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost/your-api-path/api/upload.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage("Images uploaded successfully!");
        console.log(result.files); // Array of uploaded files
        // You can display the uploaded images or update the UI
      } else {
        setMessage(result.error || "Something went wrong.");
      }
    } catch (error) {
      setMessage("Error uploading images.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
      >
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4">
          Upload Multiple Images
        </h2>

        {/* Upload Box */}
        <label className="cursor-pointer border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 transition flex flex-col items-center justify-center py-10 px-6 rounded-lg">
          <FiUploadCloud className="text-gray-500 text-4xl mb-3" />
          <span className="text-gray-600 font-medium">Click to Upload</span>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            disabled={uploading}
            className="hidden"
          />
        </label>

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          disabled={uploading}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 transition"
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>

        {/* Upload Message */}
        {message && <p className="text-green-600 text-center mt-3">{message}</p>}

        {/* Image Preview */}
        {selectedImages.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-3">
            {selectedImages.map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image)}
                alt={`preview-${index}`}
                className="w-24 h-24 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default MultiImageUploader;
