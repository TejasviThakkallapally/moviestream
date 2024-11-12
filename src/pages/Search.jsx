import React, { useState, useRef } from "react";
import diehard from "./../assets/images/diehard.jpg";
import madmax from "./../assets/images/madmax.jpeg";
import mask from "./../assets/images/mask.jpeg";
import superbad from "./../assets/images/superbad.jpeg";
import se7en from "./../assets/images/se7en.png";
import goneGirl from "./../assets/images/goneGirl.png";

const genres = ["Action", "Comedy", "Thriller"];
const genreCards = {
  Action: [
    {
      id: 1,
      title: "Die Hard",
      description: "Action-packed classic!",
      image: diehard,
      imdbLink: "https://www.imdb.com/title/tt0095016/",
    },
    {
      id: 2,
      title: "Mad Max: Fury Road",
      description: "Post-apocalyptic thriller!",
      image: madmax,
      imdbLink: "https://www.imdb.com/title/tt1392190/",
    },
  ],
  Comedy: [
    {
      id: 1,
      title: "The Mask",
      description: "Jim Carrey's hilarious classic!",
      image: mask,
      imdbLink: "https://www.imdb.com/title/tt0110475/",
    },
    {
      id: 2,
      title: "Superbad",
      description: "Teenage comedy sensation!",
      image: superbad,
      imdbLink: "https://www.imdb.com/title/tt0829482/",
    },
  ],
  Thriller: [
    {
      id: 1,
      title: "Se7en",
      description: "Dark thriller!",
      image: se7en,
      imdbLink: "https://www.imdb.com/title/tt0114369/",
    },
    {
      id: 2,
      title: "Gone Girl",
      description: "Psychological mystery!",
      image: goneGirl,
      imdbLink: "https://www.imdb.com/title/tt2267998/",
    },
  ],
};

function Search() {
  const [query, setQuery] = useState("");
  const [filteredGenres, setFilteredGenres] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const inputRef = useRef(null);

  const handleChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    if (inputValue.length >= 1) {
      const filtered = genres.filter((genre) =>
        genre.toLowerCase().startsWith(inputValue.toLowerCase())
      );
      setFilteredGenres(filtered);
      setHighlightedIndex(-1);
    } else {
      setFilteredGenres([]);
      setHighlightedIndex(-1);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      if (filteredGenres.length === 0) {
        const filtered = genres.filter((genre) =>
          genre.toLowerCase().startsWith(query.toLowerCase())
        );
        setFilteredGenres(filtered);
      }
      setHighlightedIndex((prevIndex) =>
        Math.min(prevIndex + 1, filteredGenres.length - 1)
      );
      e.preventDefault();
    } else if (e.key === "ArrowUp") {
      setHighlightedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      e.preventDefault();
    } else if (e.key === "Enter") {
      if (highlightedIndex >= 0) {
        selectGenre(filteredGenres[highlightedIndex]);
      }
    }
  };

  const selectGenre = (genre) => {
    setQuery(genre);
    setFilteredGenres([]);
    setHighlightedIndex(-1);
    setSelectedGenre(genre);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setFilteredGenres([]);
      setHighlightedIndex(-1);
    }, 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div role="main" id="main-content" className="p-4">
      <h1 id="search_label" className="text-2xl text-white font-bold">Search for Genres</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          ref={inputRef}
          aria-labelledby="search_label"
          className="border p-2 w-1/2"
          tabIndex={0}
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={filteredGenres.length > 0}
          aria-controls="cb1-listbox"
          aria-activedescendant={
            highlightedIndex >= 0 ? `option-${highlightedIndex}` : ""
          }
        />
        <div className="relative">
          {filteredGenres.length > 0 && (
            <ul
              id="cb1-listbox"
              role="listbox"
              aria-label="Genres"
              className="absolute z-10 bg-black border border-gray-300 w-1/2"
            >
              {filteredGenres.map((genre, index) => (
                <li
                  id={`option-${index}`}
                  key={genre}
                  role="option"
                  aria-selected={highlightedIndex === index}
                  onMouseDown={() => selectGenre(genre)}
                  onMouseEnter={() => setHighlightedIndex(index)}
                  className={`p-2 cursor-pointer text-white ${
                    highlightedIndex === index ? "bg-blue-500" : ""
                  }`}
                  tabIndex={-1}
                >
                  {genre}
                </li>
              ))}
            </ul>
          )}
        </div>
      </form>

      {selectedGenre && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold text-white mb-4">
            Movies in {selectedGenre}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {genreCards[selectedGenre]?.map((card) => (
              <div
                key={card.id}
                className="border p-4 rounded shadow-lg bg-black-100"
                style={{ width: "500px", height: "450px" }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-72 object-cover rounded"
                />
                <h3 className="text-lg font-bold mt-4 text-blue-500">{card.title}</h3>
                <p className="mt-2 text-blue-500">{card.description}</p>
                <a
                  href={card.imdbLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`More info about ${card.title}, opens in new tab`}
                  className="mt-4 inline-block text-blue-500 hover:underline"
                >
                  More Info
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;
