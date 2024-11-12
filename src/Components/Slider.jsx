import React, { useRef, useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

function Slider() {
  const SliderImages = [
    { image: "/images/img7.jpg" },
    { image: "/images/img6.jpg" },
    { image: "/images/img5.jpg" },
    { image: "/images/img8.jpg" },
    { image: "/images/img1.jpg" },
    { image: "/images/img2.jpg" },
    { image: "/images/img3.jpg" },
    { image: "/images/img4.jpg" },
  ];

  const sliderRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index) => {
    const scrollAmount = index * sliderRef.current.offsetWidth;
    sliderRef.current.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  const sliderLeft = () => {
    const newIndex = currentIndex === 0 ? SliderImages.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const sliderRight = () => {
    const newIndex = currentIndex === SliderImages.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowLeft" || event.key === "Enter") {
      sliderLeft();
    } else if (event.key === "ArrowRight") {
      sliderRight();
    }
  };

  return (
    <div className="flex items-center object-cover mx-10">
      <style>
        {`
        .scroll-container {
          overflow-x: hidden;
          scrollbar-width: none;
        }
        .scroll-container::-webkit-scrollbar {
          display: none;
        }
      `}
      </style>

      {/* Left Arrow Button */}
      <div
        role="button"
        tabIndex={0}
        aria-label="previousSlide"
        onClick={sliderLeft}
        onKeyDown={(event) => event.key === "Enter" && sliderLeft()}
        className="focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
      >
        <HiChevronLeft className="text-white text-4xl" />
      </div>

      {/* Slider Images */}
      <div
        className="scroll-container flex overflow-x-auto w-full py-6 mx-5"
        ref={sliderRef}
        aria-live="assertive"
        aria-atomic="true"
        //tabIndex={0} // Make this container focusable
        onKeyDown={handleKeyDown} // Handle arrow keys for navigation
      >
        {SliderImages.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex justify-center"
            style={{ width: "100%" }}
          >
            <img
              className="object-cover rounded-lg w-full hover:border-white hover:border-[8px]"
              style={{
                height: window.innerHeight * 0.6,
              }}
              src={item?.image}
              alt={`Slider image ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Right Arrow Button */}
      <div
        role="button"
        tabIndex={0}
        aria-label="nextSlide"
        onClick={sliderRight}
        onKeyDown={(event) => event.key === "Enter" && sliderRight()}
        className="focus:outline-none focus:ring-2 focus:ring-yellow-400 cursor-pointer"
      >
        <HiChevronRight className="text-white text-4xl" />
      </div>

      {/* Screen reader text for announcing the current image */}
      <div
        aria-live="assertive"
        aria-atomic="true"
        className="sr-only"
        id="image-status"
      >
        Slider {currentIndex + 1}/{SliderImages.length} image
      </div>
    </div>
  );
}

export default Slider;
