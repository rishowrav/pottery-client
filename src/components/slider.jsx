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
          "--swiper-navigation-color": "#E35353",
          "--swiper-pagination-color": "#E35353",
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000080,#00000080),url('/img/slide11.jpg')] h-[500px] bg-cover bg-center rounded-xl">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize  mx-auto w-4/5">
                Rustic Stoneware
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                Our rustic stoneware collection is an exciting range of handmade
                tableware and accessories. We have taken the simplicity and
                authenticity of studio style pottery, to create a range that is
                affordable for home
              </p>
              <div className="space-x-4">
                <button className="btn font-bold text-white bg-[#E35353] border-none hover:bg-[#E35353]  rounded-md btn-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000080,#00000080),url('/img/slide22.jpg')] h-[500px] bg-cover bg-center rounded-xl">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize mx-auto w-4/5">
                Porcelain Patterned Wall & Floor Tile
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                The field tile offers a modern twist to classic old-world
                European elegance. In muted black and chalky white tones, this
                unique patterned tile features a star constructed of geometric
                shapes at its center
              </p>
              <div className="space-x-4">
                <button className="btn font-bold text-white bg-[#E35353] border-none hover:bg-[#E35353]  rounded-md btn-lg">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000099,#00000099),url('/img/slide33.jpg')] h-[500px] bg-cover bg-center rounded-xl">
            <div className="text-center text-white space-y-8">
              <h2 className="md:text-5xl text-4xl font-bold text-white capitalize mx-auto w-4/5">
                Keilson Ceramic Pot Planter
              </h2>
              <p className="lg:w-2/3 mx-auto w-4/5">
                The Keilson Ceramic Pot Planter is a stylish vessel for indoor
                plants, crafted with durable ceramic material, enhancing any
                home decor.
              </p>
              <div className="space-x-4">
                <button className="btn font-bold text-white bg-[#E35353] border-none hover:bg-[#E35353]  rounded-md btn-lg">
                  Buy Now
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
