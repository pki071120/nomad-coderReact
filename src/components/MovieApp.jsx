import axios from "axios";
import React, { useEffect, useState } from "react";

const MovieApp = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const uploadMovies = async () => {
    await axios
      .get(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
      .then((Array) => {
        setMovies(Array.data.data.movies);
        setLoading(false);
      });
  };
  useEffect(() => {
    uploadMovies();
  }, []);
  console.log(movies);

  return <div>{loading ? <h1>Loading...</h1> : null}</div>;
};

export default MovieApp;
