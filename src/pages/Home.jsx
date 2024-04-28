import { useLoaderData } from "react-router-dom";
import Slider from "../components/slider";
import { useState } from "react";
import CraftItemsSection from "../components/CraftItemsSection";
import CraftCategoriesSection from "../components/CraftCategoriesSection";

const Home = () => {
  const loaderData = useLoaderData();
  const [crafts, setCrafts] = useState(loaderData.slice(0, 6));

  return (
    <div className="space-y-24 ">
      {/* Slider */}
      <Slider></Slider>

      {/* Craft Item  section */}
      <CraftItemsSection
        crafts={crafts}
        setCrafts={setCrafts}
        loaderData={loaderData}
      ></CraftItemsSection>

      {/* craft category section */}
      <CraftCategoriesSection></CraftCategoriesSection>
    </div>
  );
};

export default Home;
