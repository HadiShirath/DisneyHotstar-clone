/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { IMAGE_BASE_URL } from "../../service/GlobalApi";

function SliderCard({ item }) {
  return (
    <div className="min-w-full relative">
      <div className="absolute bottom-8 left-7 z-10">
        <h2 className=" text-white text-[30px] md:text-[45px] font-bold ">
          {item.title ? item.title : item.original_name}
        </h2>
        <h2 className="w-[70%] md:w-[50%] text-white text-[10px] bottom-6 left-7">
          {item.overview}
        </h2>
      </div>

      <div className="relative">
        <div className="absolute hover:border-[3px] border-gray-400  inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-800 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        <img
          src={IMAGE_BASE_URL + item.backdrop_path}
          alt="slider"
          loading="lazy"
          className="w-full md:h-[310px] object-cover object-left-top rounded-lg border-gray-400 transition-all duration-100 ease-in-out shadow-custom"
        />
      </div>
    </div>
  );
}
SliderCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export default SliderCard;
