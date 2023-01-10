import { Movie } from 'types/movie';
import './styles.css';

type Props = {
  movie?: Movie;
};

const MovieCardSynopsis = ({ movie }: Props) => {
  return (
    <div className="base-card moviecardsynopsis-container">
      <div className="moviecardsynopsis-top-container">
        <img src={movie?.imgUrl} alt={movie?.title} />
      </div>
      <div className="moviecardsynopsis-botton-container">
        <h1>{movie?.title}</h1>
        <h2>{movie?.year}</h2>
        <p>{movie?.subTitle}</p>
        <div className='moviecardsynopsis-text-container'>
          <p>{movie?.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCardSynopsis;
