import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/MovieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//fetch dta from tmdb api and update the store
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  //API CALL
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
