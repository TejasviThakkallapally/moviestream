import React from "react";
import diehard from "./../assets/images/diehard.jpg";
import madmax from "./../assets/images/madmax.jpeg";
import mask from "./../assets/images/mask.jpeg";
import superbad from "./../assets/images/superbad.jpeg";
import se7en from "./../assets/images/se7en.png";
import goneGirl from "./../assets/images/goneGirl.png";

const movieCards = [
  {
    id: 1,
    title: "Die Hard",
    image: diehard,
    youtubeLink: "https://www.youtube.com/watch?v=QIOX44m8ktc",
  },
  {
    id: 2,
    title: "Mad Max: Fury Road",
    image: madmax,
    youtubeLink: "https://www.youtube.com/watch?v=hEJnMQG9ev8",
  },
  {
    id: 3,
    title: "The Mask",
    image: mask,
    youtubeLink: "https://www.youtube.com/watch?v=hOqVRwGVUkA",
  },
  {
    id: 4,
    title: "Superbad",
    image: superbad,
    youtubeLink: "https://www.youtube.com/watch?v=4eaZ_48ZYog",
  },
  {
    id: 5,
    title: "Se7en",
    image: se7en,
    youtubeLink: "https://www.youtube.com/watch?v=znmZoVkCjpI",
  },
  {
    id: 6,
    title: "Gone Girl",
    image: goneGirl,
    youtubeLink: "https://www.youtube.com/watch?v=Ym3LB0lOJ0o",
  },
];

function WatchList() {
  return (
    <div role="main" id="main-content" className="text-white p-4">
      <h1 className="text-2xl font-bold mb-8">Welcome to WatchList</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {movieCards.map((movie) => (
          <div
            key={movie.id}
            className="flex items-center border p-4 rounded shadow-lg bg-gray-800"
            style={{ marginLeft: "50px" }}
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-32 h-48 object-cover rounded mr-4"
            />
            <div className="flex flex-col">
              <h2 className="text-lg font-bold">{movie.title}</h2>
              <a
                href={movie.youtubeLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Play movie ${movie.title} opens in new tab`}
                className="mt-4 inline-block bg-blue-200 text-black px-4 py-2 rounded hover:bg-blue-200"
              >
                Play Movie
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WatchList;
