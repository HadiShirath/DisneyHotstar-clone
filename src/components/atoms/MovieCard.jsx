import PropTypes from "prop-types";
import { IMAGE_BASE_URL } from "../../service/GlobalApi";

function MovieCard({ movie }) {
  return (
    <section>
      <img
        alt="movie card"
        src={IMAGE_BASE_URL + movie.poster_path}
        className="min-w-[150px] md:min-w-[220px] h-[220px] md:h-[330px] object-cover rounded-lg cursor-pointer hover:border-[2px] hover:scale-110 transition-all duration-200 ease-in-out shadow-custom"
      />
    </section>
  );
}

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
