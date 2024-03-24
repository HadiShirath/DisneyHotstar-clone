import React, { useEffect, useState, useRef, Suspense } from "react";
import PropTypes from "prop-types";
import { getMovieByGenreId } from "../../service/GlobalApi";
import { IoChevronForwardOutline, IoChevronBackOutline } from "react-icons/io5";

const MovieCard = React.lazy(() => import("../atoms/MovieCard"));
const HrMovieCard = React.lazy(() => import("../atoms/HrMovieCard"));

function MovieList({ genreId, indexGenre }) {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();

  useEffect(() => {
    getMovieByGenreId(genreId).then((res) => {
      setMovieList(res.data.results);
    });
  }, [genreId]);

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <>
      <div className="relative">
        <IoChevronBackOutline
          className={`hidden md:block absolute text-[40px] text-white z-10 ${
            indexGenre % 3 == 0 ? "mt-[80px]" : "mt-[150px]"
          }  cursor-pointer`}
          onClick={() => slideLeft(elementRef.current)}
        />
        <IoChevronForwardOutline
          className={`hidden md:block absolute text-[40px] text-white z-10 ${
            indexGenre % 3 == 0 ? "mt-[80px]" : "mt-[150px] "
          } cursor-pointer right-0`}
          onClick={() => slideRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto scrollbar-none pt-5 gap-6 px-3 pb-10 scroll-smooth"
        ref={elementRef}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {movieList.map((item, index) => (
            <div key={index}>
              {indexGenre % 3 == 0 ? (
                <HrMovieCard movie={item} />
              ) : (
                <MovieCard movie={item} />
              )}
            </div>
          ))}
        </Suspense>
      </div>
    </>
  );
}

MovieList.propTypes = {
  genreId: PropTypes.number,
  indexGenre: PropTypes.number,
};

export default MovieList;
