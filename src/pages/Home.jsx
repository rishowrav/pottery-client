import { useLoaderData } from "react-router-dom";
import Slider from "../components/slider";
import { useState } from "react";
import CraftItemsSection from "../components/CraftItemsSection";
import CraftCategoriesSection from "../components/CraftCategoriesSection";

import Team from "../components/Team";
import Feature from "../components/Feature";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  const loaderData = useLoaderData();
  const [crafts, setCrafts] = useState(loaderData.slice(0, 6));

  return (
    <div className="space-y-24 ">
      {/* Slider */}
      <Fade duration={1500}>
        <Slider></Slider>
      </Fade>

      {/* Craft Item  section */}

      <CraftItemsSection
        crafts={crafts}
        setCrafts={setCrafts}
        loaderData={loaderData}
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
  );
};

export default Home;
