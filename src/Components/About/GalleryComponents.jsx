import React, { useState, useEffect, useRef } from "react";
import img1 from "../../assets/gallary_images/img1.webp";
import img2 from "../../assets/gallary_images/img2.webp";
import img3 from "../../assets/gallary_images/img3.webp";
import img4 from "../../assets/gallary_images/img4.webp";
import img5 from "../../assets/gallary_images/img5.webp";
import img6 from "../../assets/gallary_images/img6.webp";
import img7 from "../../assets/gallary_images/img7.webp";
import img8 from "../../assets/gallary_images/img8.webp";
import img9 from "../../assets/gallary_images/img9.webp";
import img10 from "../../assets/gallary_images/img10.webp";
import img11 from "../../assets/gallary_images/img11.webp";
import img12 from "../../assets/gallary_images/img12.webp";
import img13 from "../../assets/gallary_images/img13.webp";
import img14 from "../../assets/gallary_images/img14.webp";
import img15 from "../../assets/gallary_images/img15.webp";
import img16 from "../../assets/gallary_images/img16.webp";
import img17 from "../../assets/gallary_images/img17.webp";
import img18 from "../../assets/gallary_images/img18.webp";
import img19 from "../../assets/gallary_images/img19.webp";
import img20 from "../../assets/gallary_images/img20.webp";
import img21 from "../../assets/gallary_images/img21.webp";
import img22 from "../../assets/gallary_images/img22.webp";
import img23 from "../../assets/gallary_images/img23.webp";
import img24 from "../../assets/gallary_images/img24.webp";
import img25 from "../../assets/gallary_images/img25.webp";
import img26 from "../../assets/gallary_images/img26.webp";
import img27 from "../../assets/gallary_images/img27.webp";
import img28 from "../../assets/gallary_images/img28.webp";
import left from "../../assets/left-arrow.png";
import right from "../../assets/right-arrow.png";
import cross from "../../assets/close-button.png";


const GalleryComponent = () => {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28];

  const [selectedImage, setSelectedImage] = useState(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const galleryRef = useRef(null);

  const scrollByWidth = 300; // pixels to scroll per click

  const handleScroll = (direction) => {
    const container = galleryRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -scrollByWidth : scrollByWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const checkButtons = () => {
    const container = galleryRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkButtons();
    const container = galleryRef.current;
    container?.addEventListener("scroll", checkButtons);
    return () => container?.removeEventListener("scroll", checkButtons);
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 relative">
      <h1 className="text-3xl font-bold font-mono text-center text-yellow-500 mb-8">Gallery</h1>

      <div className="relative">
        {/* Left Button */}
        {showLeft && (
          <button
            onClick={() => handleScroll("left")}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 opacity-50 hover:opacity-90 transition-transform ease-in-out p-2 rounded-full shadow-md"
          >
            <img src={left} alt="scroll left" className="w-9 h-9"/>
          </button>
        )}

        {/* Right Button */}
        {showRight && (
          <button
            onClick={() => handleScroll("right")}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-700 opacity-50 hover:opacity-90 transition-transform ease-in-out p-2 rounded-full shadow-md"
          >
            <img src={right} alt="scroll right" className="w-9 h-9" />
          </button>
        )}

        {/* Scrollable Gallery */}
        <div
          ref={galleryRef}
          className="flex overflow-x-auto space-x-4 px-6 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-64 rounded-lg overflow-hidden shadow-md cursor-pointer"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                loading="lazy"
                alt={`Gallery Image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src={cross}
              className="absolute top-6 right-6 rounded-full w-10 h-10 flex justify-center items-center font-extrabold cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full rounded-lg p-20" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
