import React, { useState } from "react";

import piechart from "./../assets/images/piechart.jpeg";

function Favourite() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="text-white px-11" role="main" id="main-content">
      <h1>Favorite Movie Genres - Survey Insights</h1>
      <br />

      <img src={piechart} alt="piechart:favourite genre preferences" className="w-[50%] h-[50%] rounded" />
      <br />

      {/* Image Description Button */}
      <button
        onClick={toggleDropdown}
        aria-expanded={isDropdownOpen}  /* Dynamically set aria-expanded */
        aria-controls="favourite-info"  /* References the ID of the favourite info */
        aria-label="image description"
        className="bg-gray-700 text-yellow-400 py-2 px-4 rounded-md hover:bg-gray-600 transition-colors"
      >
        Chart Description
      </button>

      {/* Conditionally render the table based on dropdown state */}
      {isDropdownOpen && (
        <div
          id="favourite-info"  /* ID for reference by aria-controls */
          className="mt-2 p-2 bg-gray-800 border border-gray-700 rounded-md max-w-[320px]"
        >
          {/* <table className="min-w-full text-sm text-left text-white border-collapse"> */}

          <table className="w-[300px] h-[200px] text-sm text-left text-white border-collapse">

            <caption className="text-xl font-semibold mb-4">Favourites Data</caption>
            <thead>
              <tr className="border-b border-gray-600">
                <th scope="col" className="py-2 px-4">Genre</th>
                <th scope="col" className="py-2 px-4">Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-600">
                <td className="py-2 px-4">Science Fiction</td>
                <td className="py-2 px-4">40.60%</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-2 px-4">Thriller</td>
                <td className="py-2 px-4">40.10%</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-2 px-4">Fantasy</td>
                <td className="py-2 px-4">12.90%</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-2 px-4">Mystery</td>
                <td className="py-2 px-4">2.00%</td>
              </tr>
              <tr className="border-b border-gray-600">
                <td className="py-2 px-4">Others</td>
                <td className="py-2 px-4">4.40%</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Favourite;
