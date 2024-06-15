
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTvSeriesList from "../hooks/useTvSeriesList";


const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTvSeriesList();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
      MainConatiner
        - videoBackGround
        - videoTitle
      SeconadryConatiner
        -MovieList * n
           cards*n
    */}
    </div>
  );
};

export default Browse;
