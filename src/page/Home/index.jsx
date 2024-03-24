import React, { Component } from "react";
import PropTypes from "prop-types";
import "../../App.css";
import {
  Header,
  Slider,
  ProductionHouse,
  GenreMovieList,
} from "../../components/molecules";
import { searchMoviebyKeyword } from "../../service/GlobalApi";

import { connect } from "react-redux";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataMovies: [],
      keywordValue: "",
    };
    this.productionHouseRef = React.createRef();
  }

  componentDidUpdate(prevProps) {
    const { keyword } = this.props;
    if (keyword && prevProps.keyword !== keyword) {
      this.setState({ keywordValue: keyword });
      searchMoviebyKeyword(keyword).then((res) => {
        this.setState({ dataMovies: res.data.results });
      });
    }
  }

  scrollToProductionHouse = () => {
    if (this.productionHouseRef.current) {
      this.productionHouseRef.current.scrollToProduction();
    }
  };

  render() {
    const { dataMovies, keywordValue } = this.state;
    console.log(dataMovies);

    return (
      <div className="">
        <Header scrollToProductionHouse={this.scrollToProductionHouse} />
        <Slider />
        <ProductionHouse ref={this.productionHouseRef} />
        {keywordValue ? (
          <>
            <div className="px-6 md:px-16 pt-5">
              <h2 className="text-[23px] text-white">
                Hasil Pencarian :
                <span className="text-yellow-600">{` "${keywordValue}"`}</span>
              </h2>
            </div>
            <GenreMovieList dataMovies={dataMovies} keyword={keywordValue} />
          </>
        ) : (
          <GenreMovieList />
        )}
      </div>
    );
  }
}

Home.propTypes = {
  keyword: PropTypes.string,
};

const mapStateToProps = (state) => ({
  keyword: state.MovieReducer.keyword,
});

export default connect(mapStateToProps, null)(Home);
