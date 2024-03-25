import { HiChevronRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="relative h-screen flex justify-center items-center">
      {/* Gambar latar belakang */}
      <img
        src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1080/feature/onboarding/15-03-2024-id-background-desktop.png"
        alt="bg"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Konten di tengah */}
      <div className="absolute z-10 bottom-20">
        <div className="flex items-center justify-center ">
          <img
            src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_480/v1656431456/web-images/logo-d-plus.svg"
            width={220}
            alt="Logo"
          />
        </div>

        <h2 className="text-white text-3xl font-semibold pt-10">
          Home of Your Favorites and More
        </h2>
        <Link to="/home">
          <div className=" mx-16 mt-5 flex px-16 py-3 gap-4 justify-center blue items-center bg-gradient-to-r from-ringblue500 to-ringBlue700 rounded-lg hover:scale-105 transition-all duration-700 cursor-pointer">
            <h2 className="text-white text-[18px] font-semibold">
              Subscribe Now
            </h2>
            <HiChevronRight className="text-[22px] text-white" />
          </div>
        </Link>
      </div>

      {/* Gradient hitam ke transparan */}
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
    </div>
  );
}

export default LandingPage;
