import { useLoaderData } from "react-router-dom";
import Slider from "../components/slider";
import { useContext, useState } from "react";
import CraftItemsSection from "../components/CraftItemsSection";
import CraftCategoriesSection from "../components/CraftCategoriesSection";

import Team from "../components/Team";
import Feature from "../components/Feature";
import { Fade } from "react-awesome-reveal";
import { AuthContext } from "../authProvider/AuthProvider";
import Lottie from "lottie-react";
import Parrot from "../../public/Parrot.json";

const Home = () => {
  const { loadingData, craftsData } = useContext(AuthContext);

  const loaderData = useLoaderData();
  const [crafts, setCrafts] = useState(loaderData.slice(0, 6));

  return (
    <>
      {loadingData ? (
        <div className="flex justify-center my-20 ">
          <div className="w-[200px]">
            <Lottie loop={true} animationData={Parrot}></Lottie>
          </div>
        </div>
      ) : (
        <div>
          <div className="space-y-24 ">
            {/* Slider */}
            <Fade duration={1500}>
              <Slider></Slider>
            </Fade>

            {/* Craft Item  section */}

            <CraftItemsSection
              crafts={crafts}
              setCrafts={setCrafts}
              loaderData={craftsData}
            ></CraftItemsSection>

            {/* craft category section */}
            <CraftCategoriesSection></CraftCategoriesSection>

            {/* feature section */}
            <Fade duration={2000}>
              <Feature></Feature>
            </Fade>

            {/* our team section */}
            <Fade duration={2000}>
              <Team></Team>
            </Fade>
          </div>
          <div className="space-y-24 ">
            {/* Slider */}
            <Fade duration={1500}>
              <Slider></Slider>
            </Fade>

            {/* Craft Item  section */}

            <CraftItemsSection
              crafts={crafts}
              setCrafts={setCrafts}
              loaderData={craftsData}
            ></CraftItemsSection>

            {/* craft category section */}
            <CraftCategoriesSection></CraftCategoriesSection>

            {/* feature section */}
            <Fade duration={2000}>
              <Feature></Feature>
            </Fade>

            {/* our team section */}
            <Fade duration={2000}>
              <Team></Team>
            </Fade>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
