import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MultiImageUploader = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [message, setMessage] = useState("");
  const [textInput, setTextInput] = useState(""); // New Text Field State

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    setSelectedImages(files);
  };

  const handleRemoveImage = (index) => {
    setSelectedImages(selectedImages.filter((_, i) => i !== index));
  };

  const handleUpload = async () => {
    if (selectedImages.length === 0) {
      setMessage("Please select images to upload.");
      return;
    }

    const formData = new FormData();
    selectedImages.forEach((image) => {
      formData.append("images[]", image);
    });
    formData.append("textInput", textInput); // Append text input data

    try {
      const response = await fetch("http://localhost/image-upload-api/upload.php", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (result.status === "success") {
        setMessage("Upload successful!");
        setSelectedImages([]);
        setTextInput(""); // Clear text input
      } else {
        setMessage(result.message || "Upload failed.");
      }
    } catch (error) {
      setMessage("Error uploading images.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg"
      >
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Upload Multiple Images
        </h2>

        {/* Text Input Field */}
        <input
          type="text"
          placeholder="Add Month and Year"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Drag & Drop or Click to Upload */}
        <label className="cursor-pointer w-full border-2 border-dashed border-gray-300 p-8 flex flex-col items-center justify-center rounded-lg hover:bg-gray-50 transition">
          <FaCloudUploadAlt className="text-gray-500 text-4xl mb-2" />
          <span className="text-gray-500">Click or Drag & Drop to Upload</span>
          <input
            type="file"
            multiple
            className="hidden"
            onChange={handleImageChange}
            accept="image/*"
          />
        </label>

        {/* Preview Selected Images */}
        {selectedImages.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-2">
            {selectedImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={URL.createObjectURL(image)}
                  alt="Preview"
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <button
                  className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                  onClick={() => handleRemoveImage(index)}
                >
                  <MdDelete className="text-sm" />
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Upload Button */}
        <button
          onClick={handleUpload}
          className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          Upload
        </button>

        {/* Status Message */}
        {message && <p className="mt-3 text-center text-gray-600">{message}</p>}
      </motion.div>
    </div>
  );
};

export default MultiImageUploader;
