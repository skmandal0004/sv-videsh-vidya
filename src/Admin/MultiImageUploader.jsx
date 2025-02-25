import React, { useState } from "react";

const MultiImageUploader = () => {
  const [files, setFiles] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");

  const handleFileChange = (e) => {
    setFiles([...e.target.files]); // Store selected files (both images & PDFs)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (files.length === 0) {
      setUploadStatus("Please select at least one file (Image or PDF).");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files[]", file); // Append files array (both images & PDFs)
    });
    formData.append("textInput", textInput); // Append text input

    try {
      const response = await fetch("http://localhost/image-upload-api/upload.php", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setUploadStatus("Files uploaded successfully!");
        setTimeout(() => {
          window.location.reload(); // Refresh the page after 1 second
        }, 1000);
      } else {
        setUploadStatus("Upload failed: " + data.message);
      }
    } catch (error) {
      setUploadStatus("Error uploading files.");
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Upload Images or PDF</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="file"
          multiple
          accept="image/*, application/pdf"
          onChange={handleFileChange}
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Enter Month & Year"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button>
      </form>

      {uploadStatus && <p className="mt-4 text-gray-700">{uploadStatus}</p>}
    </div>
  );
};

export default MultiImageUploader;
