import React, { Component } from "react";
import {
  disney,
  pixar,
  marvel,
  starwars,
  nationalG,
} from "../../assets/images";
import {
  disneyV,
  pixarV,
  marvelV,
  starwarsV,
  nationalGV,
} from "../../assets/videos";
import PropTypes from "prop-types";

class ProductionHouse extends Component {
  constructor(props) {
    super(props);
    this.productionRef = React.createRef();
  }

  componentDidMount() {
    // Memanggil fungsi yang diteruskan dari komponen induk (App)
    const { productionHouseRef } = this.props;
    if (productionHouseRef) {
      productionHouseRef(this.scrollToProduction);
    }
  }

  scrollToProduction = () => {
    // Memastikan ref sudah tersedia sebelum memanggil scrollIntoView
    if (this.productionRef.current) {
      this.productionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  render() {
    const productionHouseList = [
      {
        id: 1,
        image: disney,
        video: disneyV,
      },
      {
        id: 2,
        image: pixar,
        video: pixarV,
      },
      {
        id: 3,
        image: marvel,
        video: marvelV,
      },
      {
        id: 4,
        image: starwars,
        video: starwarsV,
      },
      {
        id: 5,
        image: nationalG,
        video: nationalGV,
      },
    ];

    return (
      <div
        className="flex gap-2 md:gap-5 p-2 px-5 md:px-16"
        ref={this.productionRef}
      >
        {productionHouseList.map((item, index) => (
          <div
            className="border-[3px] border-gray-700 rounded-xl hover:scale-110 hover:border-gray-300 border-opacity-50 shadow-custom cursor-pointer transition-all duration-500 ease-in-out relative"
            key={index}
          >
            <img
              src={item.image}
              alt="production house"
              className="w-full z-10"
            />
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute z-0 top-0 rounded-lg opacity-0 hover:opacity-50"
            />
          </div>
        ))}
      </div>
    );
  }
}

// PropTypes
ProductionHouse.propTypes = {
  productionHouseRef: PropTypes.func,
};

export default ProductionHouse;
