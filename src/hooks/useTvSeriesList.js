import { useDispatch } from "react-redux";
import { addTvSeries} from "../utils/MovieSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

//fetch dta from tmdb api and update the store
const useTvSeriesList = () => {
  const dispatch = useDispatch();
  //API CALL
  const getTvSeriesList = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/airing_today?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addTvSeries(json.results));
  };

  useEffect(() => {
    getTvSeriesList();
  }, []);
};

export default useTvSeriesList;
