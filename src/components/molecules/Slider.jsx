import React, { useEffect, useState, useRef, Suspense } from "react";
import { getTrendingVideos } from "../../service/GlobalApi";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const SliderCard = React.lazy(() => import("../atoms/SliderCard"));

function Slider() {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef();
  const screenWidth = window.innerWidth;

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    getTrendingVideos.then((res) => {
      setMovieList(res.data.results);
    });
  };

  const sliderRight = (element) => {
    element.scrollLeft += screenWidth - 110;
  };

  const sliderLeft = (element) => {
    element.scrollLeft -= screenWidth - 110;
  };

  return (
    <div>
      <HiChevronLeft
        className="hidden md:block text-[35px] absolute mx-8 mt-[150px] z-10 cursor-pointer"
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-[35px] absolute mx-8 mt-[150px] z-10 cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />
      <div
        className="flex overflow-x-auto w-full px-8 md:px-16 pb-8 scrollbar-none scroll-smooth gap-5  "
        ref={elementRef}
      >
        <Suspense fallback={<div>Loading...</div>}>
          {movieList.map((item, index) => (
            <SliderCard key={index} item={item} />
          ))}
        </Suspense>
      </div>
    </div>
  );
}

export default Slider;
