import React, { useState, useEffect, useRef } from "react";
import img1 from "../../assets/gallary_images/1.png";
import img2 from "../../assets/gallary_images/2.png";
import img3 from "../../assets/gallary_images/3.png";
import img4 from "../../assets/gallary_images/4.png";
import img5 from "../../assets/gallary_images/5.png";
import img6 from "../../assets/gallary_images/6.png";
import img7 from "../../assets/gallary_images/7.png";
import img8 from "../../assets/gallary_images/8.png";
import img9 from "../../assets/gallary_images/9.png";
import img10 from "../../assets/gallary_images/10.png";
import img11 from "../../assets/gallary_images/11.png";
import img12 from "../../assets/gallary_images/12.png";
import img13 from "../../assets/gallary_images/13.png";
import img14 from "../../assets/gallary_images/14.png";
import img15 from "../../assets/gallary_images/15.jpg";
import img16 from "../../assets/gallary_images/16.jpg";
import img17 from "../../assets/gallary_images/17.jpg";
import img18 from "../../assets/gallary_images/18.jpg";
import img19 from "../../assets/gallary_images/19.jpg";
import img20 from "../../assets/gallary_images/20.JPG";
import img21 from "../../assets/gallary_images/21.jpg";
import img22 from "../../assets/gallary_images/22.jpg";
import img23 from "../../assets/gallary_images/23.jpg";
import img24 from "../../assets/gallary_images/24.jpg";
import img25 from "../../assets/gallary_images/25.jpg";
import img26 from "../../assets/gallary_images/26.jpeg";
import img27 from "../../assets/gallary_images/27.jpeg";

const GalleryComponent = () => {
  const initialImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27,
  ];

  const [images, setImages] = useState([...initialImages, ...initialImages]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrolling, setScrolling] = useState(false);
  const galleryRef = useRef(null);

  // Infinite Scroll Effect (Horizontal)
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      if (gallery.scrollLeft === 0) {
        gallery.scrollLeft = gallery.scrollWidth / 2;
      } else if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
        gallery.scrollLeft = 1;
      }
    };

    gallery.addEventListener("scroll", handleScroll);
    return () => gallery.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto Scroll Effect
  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const startScrolling = () => {
      setScrolling(true);
      const scrollInterval = setInterval(() => {
        gallery.scrollLeft += 2;
      }, 30);

      return () => {
        clearInterval(scrollInterval);
        setScrolling(false);
      };
    };

    const stopScrolling = startScrolling();
    return stopScrolling;
  }, []);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 py-12 text-center">
      <h1 className="text-3xl font-semibold text-yellow-500 mb-8">
        Gallery
      </h1>

      {/* Horizontal Scrollable Gallery */}
      <div
        ref={galleryRef}
        className="flex overflow-x-auto whitespace-nowrap space-x-4 px-6 py-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-64 h-64 flex-shrink-0 overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform transform duration-300"
            />
          </div>
        ))}
      </div>

      {/* Full-Screen Popup Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex justify-center items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2763/2763138.png"
              className="absolute top-6 right-6 rounded-full w-10 h-10 flex justify-center items-center font-extrabold cursor-pointer"
              onClick={() => setSelectedImage(null)}
            />
            <img src={selectedImage} alt="Selected" className="max-w-full max-h-full rounded-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
