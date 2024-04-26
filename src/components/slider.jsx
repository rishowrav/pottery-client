// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Slider = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        style={{
          "--swiper-navigation-color": "#ff6647",
          "--swiper-pagination-color": "#ff6647",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000080,#00000080),url('img/slide11.jpg')] h-[500px] bg-cover bg-center rounded-xl">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize  mx-auto w-4/5">
                Your dream home is our top priority
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                Crafting your dream home is our foremost commitment. From design
                to completion, we prioritize making your vision a stunning
                reality. Welcome home.
              </p>
              <div className="space-x-4">
                <button className="btn font-bold text-white bg-[#ff6647] border-none hover:bg-[#ff6647]  rounded-md btn-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000080,#00000080),url('img/slide22.jpg')] h-[500px] bg-cover bg-center rounded-xl">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize mx-auto w-4/5">
                Your trusted partner in real estate
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                Count on us as your reliable real estate ally. With our
                expertise and dedication, we guide you seamlessly through every
                step of your property journey.
              </p>
              <div className="space-x-4">
                <button className="btn font-bold text-white bg-[#ff6647] border-none hover:bg-[#ff6647]  rounded-md btn-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000099,#00000099),url('img/slide33.jpg')] h-[500px] bg-cover bg-center rounded-xl">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize mx-auto w-4/5">
                Buy, sell, and rent with confidence
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                Empower your property endeavors with assurance. Whether buying,
                selling, or renting, our expertise ensures a seamless process,
                letting you move forward with confidence.
              </p>
              <div className="space-x-4">
                <button className="btn font-bold text-white bg-[#ff6647] border-none hover:bg-[#ff6647]  rounded-md btn-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000099,#00000099),url('img/slide44.jpg')] h-[500px] bg-cover bg-center rounded-xl">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize mx-auto w-4/5">
                Buy, sell, and rent with confidence
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                Empower your property endeavors with assurance. Whether buying,
                selling, or renting, our expertise ensures a seamless process,
                letting you move forward with confidence.
              </p>
              <div className="space-x-4">
                <button className="btn font-bold text-white bg-[#ff6647] border-none hover:bg-[#ff6647]  rounded-md btn-lg">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
