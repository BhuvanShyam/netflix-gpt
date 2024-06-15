import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/MovieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//fetch dta from tmdb api and update the store
const usePopularMovies = () => {
  const dispatch = useDispatch();
  //API CALL
  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
