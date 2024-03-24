import PropTypes from "prop-types";
import { IMAGE_BASE_URL } from "../../service/GlobalApi";

function HrMovieCard({ movie }) {
  return (
    <section className="hover:scale-110 transition-all duration-200 ease-in">
      <img
        alt="hr movie"
        src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
        loading="lazy"
        className="w-[130px] md:w-[220px] rounded-lg cursor-pointer hover:border-[2px] border-gray-400 shadow-custom"
      />
      <h2 className="w-[130px] md:w-[220px] text-white font-medium pt-2">
        {movie.title}
      </h2>
    </section>
  );
}

HrMovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default HrMovieCard;
