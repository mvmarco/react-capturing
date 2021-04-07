import {useState, useEffect} from 'react';
// import styled components
import styled from 'styled-components';
// import useHistory
import {useHistory} from 'react-router-dom';
// import movieState data
import { MovieState } from "../movieState";
// animations
import {motion} from 'framer-motion';
import {pageAnimation} from '../animation'

const MovieDetail = () => {
  const history = useHistory(); // info this component, like path location etc
  console.log(history);
  const url = history.location.pathname;
  console.log(url);
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //useEffect, when we when click on a movie we load the movie information
  // we run this all the time movies uptades and the url or the history updates
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  // The filter() method returns an array containing elements of the parent array
  // since movies is an array of objects, we filter and we get another array that includes an object
  // if we just want the object so we can access the images and details, we get to extract it
  // console.log(movie);
  // console.log(movie[0]);

  // movie is now an object. awards is an array of objects
  

  return (
    <>
      {movie && (
        <Details variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <HeadLine>
            <h2>{movie.title}</h2>
            <img
              className={
                movie.title === "The Racer" ? "racer-photo" : "else-photo"
              }
              src={movie.mainImg}
              alt="movie"
            />
          </HeadLine>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie"/>
          </ImageDisplay>
        </Details>
      )}
    </>
  );
}

// styled components
const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
  .racer-photo {
    object-position: 100% 5%;
  }
  .else-photo {
    object-fit: cover;
    object-position: 100% 55%;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;

const AwardStyle = styled.div`
  padding: 5rem 5rem 1rem 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

//Award Component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;