import {useState, useEffect} from 'react';
// import styled components
import styled from 'styled-components';
// import useHistory
import {useHistory} from 'react-router-dom';
// import movieState data
import { MovieState } from "../movieState";

const MovieDetail = () => {
  const history = useHistory(); // info this component, like path location etc
  console.log(history);
  const url = history.location.pathname
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect, when we when click on a movie we load the movie information
  // we run this all the time movies uptades and the url or the history updates
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie);
    console.log(setMovies);
  }, [movies, url]);

  return(
    <div>
      <h1>MovieDetail</h1>
    </div>
  );
}

export default MovieDetail;