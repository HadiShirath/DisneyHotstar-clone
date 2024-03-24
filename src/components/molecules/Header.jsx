import { useState } from "react";
import logo from "../../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { HeaderCard } from "../atoms";
import { saveKeywordMovie } from "../../action/movieAction.js";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function Header({ dispatch, scrollToProductionHouse }) {
  const [query, setQuery] = useState("");

  const [toggle, setToggle] = useState(false);
  const menu = [
    { menu: "HOME", icon: HiHome },
    { menu: "SEARCH", icon: HiMagnifyingGlass },
    { menu: "WATCHLIST", icon: HiPlus },
    { menu: "ORIGINALS", icon: HiStar },
    { menu: "MOVIES", icon: HiPlayCircle },
    { menu: "SERIES", icon: HiTv },
  ];

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(saveKeywordMovie(query.toLowerCase()));
    if (query.length && scrollToProductionHouse) {
      scrollToProductionHouse();
    }
    setQuery("");
  };

  return (
    <div className="flex items-center justify-between p-5">
      <div className="flex gap-8 items-center">
        <div onClick={() => window.location.reload()}>
          <img
            src={logo}
            alt="logo"
            className="w-[80px] md:w-[115px] cursor-pointer"
          />
        </div>

        <div className="hidden lg:flex gap-8">
          {menu.map((item, index) => (
            <HeaderCard key={index} name={item.menu} Icon={item.icon} />
          ))}
        </div>
        <div className="flex lg:hidden gap-5">
          {menu.slice(0, 3).map((item, index) => (
            <HeaderCard key={index} name={""} Icon={item.icon} />
          ))}
          <div className="lg:hidden" onClick={() => setToggle(!toggle)}>
            <HeaderCard name={""} Icon={HiDotsVertical} />
            {toggle && (
              <div className="absolute z-10 mt-3 bg-[#121212] border-[0.8px] border-gray-700 rounded-md px-5 py-3 ">
                {menu.slice(3).map((item, index) => (
                  <HeaderCard key={index} name={item.menu} Icon={item.icon} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <div className="hidden xl:flex">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="searchInput"
              value={query}
              onChange={handleChange}
              placeholder="Search Movie ..."
              className="h-[45px] mr-2 rounded-lg px-2 bg-transparent text-[16px] font-medium text-white border-[1px] border-gray-600"
            />
            <button className="border-blue-600 h-[45px]" type="submit">
              Cari
            </button>
          </form>
        </div>
        <img
          alt="profile"
          src="https://robohash.org/14c46ca150958c2fae62e1a6617ebe5c?set=set4&bgset=&size=400x400"
          className="w-[40px] rounded-full"
        />
      </div>
    </div>
  );
}
Header.propTypes = {
  dispatch: PropTypes.func.isRequired,
  scrollToProductionHouse: PropTypes.func,
};

export default connect()(Header);
