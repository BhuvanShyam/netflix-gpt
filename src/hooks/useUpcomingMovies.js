import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/MovieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//fetch dta from tmdb api and update the store
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  //API CALL
  const getUpcomingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
