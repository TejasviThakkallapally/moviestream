import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function MovieView() {
  const location = useLocation();
  const { movie } = location.state || {};
  const desc = useSelector((state) => state.descs[0]?.description);

  //console.log("Movie Description from Redux:", desc);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const videoRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div role="main" id="main-content" className="text-yellow-400 px-11">
      <h1>{movie?.name || "Movie Title"}</h1>
      <br />

      <video
        ref={videoRef}
        src={movie?.video}
        autoPlay
        loop
        muted
        className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5 border border-gray-600 p-2"
      />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayback}
        aria-pressed={isPlaying ? "true" : "false"} // Toggles between true/false when clicked
        aria-label={isPlaying ? "Pause gif" : "Play gif"} // Correct action label based on video state
        className="bg-gray-700 text-yellow-400 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors mt-4"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <br />

      {/* Movie Info Section */}
      <div className="mt-4">
        <button
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen}
          aria-label="More info about movie"
          aria-controls="movie-info"
          className="bg-gray-700 text-yellow-400 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
        >
          Movie Info
        </button>

        {isDropdownOpen && (
          <div
            id="movie-info"
            className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded-md"
            aria-live="polite" // Ensure description changes are read aloud
          >
            <p>{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieView;
