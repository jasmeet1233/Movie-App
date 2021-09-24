import React, { useState } from "react";
import MoviesList from "./MoviesList";


function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const updateMovies = (data) => {
    setMovies(data);
    setLoading(false);
  };

  const changeLoading = () => {
    setLoading(false);
  };

  return (
    <MoviesList
      updateMovies={updateMovies}
      changeLoading={changeLoading}
      loading={loading}
      movies={movies}
    />
  );
}

export default HomePage;
