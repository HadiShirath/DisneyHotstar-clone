import React, { Component, Suspense } from "react";
import { genresList } from "../../data/genresList";
import MovieList from "./MovieList";
import PropTypes from "prop-types";

const LazyMovieCard = React.lazy(() => import("../atoms/MovieCard"));

class GenreMovieList extends Component {
  renderGenres() {
    return genresList.slice(0, 4).map((item, index) => (
      <div key={index} className="px-8 md:px-16">
        <h2 className="text-[20px] text-white font-semibold">{item.name}</h2>
        <MovieList genreId={item.id} indexGenre={index} />
      </div>
    ));
  }

  render() {
    const { dataMovies, keyword } = this.props;

    if (keyword && !dataMovies.length) {
      return (
        <div>
          <div className="px-6 md:px-16 pt-3 pb-10">
            <h2>
              Data <span className="font-bold">{keyword}</span> tidak ditemukan
            </h2>
          </div>
          {this.renderGenres()}
        </div>
      );
    }

    return (
      <div className="mt-8">
        {dataMovies ? (
          <div className="flex flex-wrap justify-center md:gap-12 p-2 px-5 md:px-16">
            {dataMovies.map((item, index) => {
              if (!item.poster_path) {
                return null;
              }
              return (
                <Suspense key={index} fallback={<div>Loading...</div>}>
                  <div className="w-[220px] pb-10">
                    <LazyMovieCard movie={item} />
                    <h2 className=" text-[16px] lg:text-[18px] text-white overflow-hidden whitespace-nowrap font-semibold pt-3 max-w-[70%] md:max-w-[220px] ">
                      {item.title}
                    </h2>
                  </div>
                </Suspense>
              );
            })}
          </div>
        ) : (
          this.renderGenres()
        )}
      </div>
    );
  }
}

GenreMovieList.propTypes = {
  keyword: PropTypes.string,
  dataMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      overview: PropTypes.string,
      poster_path: PropTypes.string,
    })
  ),
};

export default GenreMovieList;
