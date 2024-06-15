import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  if (!Array.isArray(movies) || movies.length === 0) {
    return (
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <div>No movies available</div>
      </div>
    );
  }

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll p-4 bg-black-200 border border-black-300 rounded-lg shadow-md scroll-container">
        <div className="flex">
          {movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
