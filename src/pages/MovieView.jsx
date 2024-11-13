import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

function MovieView() {
  const location = useLocation();
  const { movie } = location.state || {};  // Ensure movie is not undefined
  const desc = useSelector((state) => state.descs[0]?.description); // Fetch description from Redux state

  // Log the description to ensure it's correct
  console.log("Movie Description from Redux:", desc);

  // State to control dropdown visibility and video playback
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  // Ref to control the video element directly
  const videoRef = useRef(null);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Toggle video playback (play/pause)
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
      <h1>{movie?.name || "Movie Title"}</h1> {/* Fallback for movie name */}
      <br />

      <video
        ref={videoRef}
        src={movie?.video} // Make sure movie and video are available
        autoPlay
        loop
        muted
        className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 2xl:w-2/5 border border-gray-600 p-2"
      />

      {/* Play/Pause Button */}
      <button
        onClick={togglePlayback}
        className="bg-gray-700 text-yellow-400 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors mt-4"
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
      <br />

      {/* Movie Info Section */}
      <div className="mt-4">
        <button
          onClick={toggleDropdown}
          aria-expanded={isDropdownOpen} // Dynamically set aria-expanded
          aria-label="More info about movie"
          aria-controls="movie-info" // References the ID of the movie info
          className="bg-gray-700 text-yellow-400 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
        >
          Movie Info
        </button>

        {/* Conditionally render description based on dropdown state */}
        {isDropdownOpen && (
          <div
            id="movie-info" // ID for reference by aria-controls
            className="mt-2 p-4 bg-gray-800 border border-gray-700 rounded-md"
          >
            <p>{desc}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieView;
