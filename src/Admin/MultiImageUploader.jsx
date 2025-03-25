import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FilePlus, UploadCloud, Loader2 } from "lucide-react"; // Icons

const MultiImageUploader = () => {
  const navigate = useNavigate();
  const correctPassword = "MySecureAdmin123"; // Change this to your password

  const [isVerified, setIsVerified] = useState(false);
  const [isChecking, setIsChecking] = useState(true);
  const [files, setFiles] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [uploadStatus, setUploadStatus] = useState("");
  const [previewFiles, setPreviewFiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkPassword = () => {
      const userInput = window.prompt("Enter Admin Password:");
      if (userInput === correctPassword) {
        setIsVerified(true);
      } else {
        alert("Incorrect password! Redirecting...");
        navigate("/"); // Redirect to home or 404 page
      }
      setIsChecking(false);
    };

    checkPassword();
  }, [navigate]);

  if (isChecking) return null; // Hide content while verifying
  if (!isVerified) return null; // Ensure page is hidden if not verified

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);

    // Generate preview URLs for images
    const previewUrls = selectedFiles.map((file) =>
      file.type.startsWith("image") ? URL.createObjectURL(file) : null
    );
    setPreviewFiles(previewUrls);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setUploadStatus("Uploading...");

    if (files.length === 0) {
      setUploadStatus("Please select at least one file (Image or PDF).");
      setLoading(false);
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files[]", file);
    });
    formData.append("textInput", textInput);

    try {
      const response = await fetch("https://sphpvt.com/SVvideshApi/upload.php", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      const text = await response.text();
      try {
        const data = JSON.parse(text);

        if (data.success) {
          setUploadStatus("✅ Files uploaded successfully!");
          setFiles([]);
          setPreviewFiles([]);
          setTextInput("");
          setTimeout(() => setUploadStatus(""), 3000);
        } else {
          setUploadStatus("❌ Upload failed: " + data.message);
        }
      } catch (jsonError) {
        console.error("Invalid JSON response:", text);
        setUploadStatus("❌ Server Error: Invalid response received!");
      }
    } catch (error) {
      setUploadStatus("❌ Error uploading files. " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg border">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
        <FilePlus size={20} className="text-blue-500" />
        Upload Images or PDFs
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex items-center gap-2 cursor-pointer border p-3 rounded bg-gray-100">
          <UploadCloud className="text-blue-500" />
          <input
            type="file"
            multiple
            accept="image/*, application/pdf"
            onChange={handleFileChange}
            className="hidden"
          />
          <span>Select Files</span>
        </label>

        {/* Show previews for images */}
        {previewFiles.length > 0 && (
          <div className="flex gap-2 flex-wrap mt-2">
            {previewFiles.map((preview, index) =>
              preview ? (
                <img
                  key={index}
                  src={preview}
                  alt="Preview"
                  className="w-16 h-16 object-cover rounded border"
                />
              ) : (
                <span key={index} className="text-sm text-gray-500">
                  📄 PDF {index + 1}
                </span>
              )
            )}
          </div>
        )}

        <input
          type="text"
          placeholder="Enter Month & Year"
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          className="p-2 border rounded"
        />

        <button
          type="submit"
          className={`px-4 py-2 rounded flex items-center gap-2 justify-center ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
          } text-white`}
          disabled={loading}
        >
          {loading ? (
            <>
              <Loader2 size={18} className="animate-spin" /> Uploading...
            </>
          ) : (
            <>
              <UploadCloud size={18} /> Upload
            </>
          )}
        </button>
      </form>

      {uploadStatus && (
        <p className="mt-4 text-gray-700 flex items-center gap-2">
          {uploadStatus}
        </p>
      )}
    </div>
  );
};

export default MultiImageUploader;
