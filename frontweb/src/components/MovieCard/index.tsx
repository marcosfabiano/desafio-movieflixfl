import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie?: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <div className="base-card moviecard-container">
      <div className="moviecard-top-container">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="moviecard-botton-container">
        <h1>{movie?.title}</h1>
        <h2>{movie?.year}</h2>
        <p>{movie?.subTitle}</p>
      </div>
    </div>
  );
};

export default MovieCard;
