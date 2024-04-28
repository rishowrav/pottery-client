import { useLoaderData } from "react-router-dom";
import Slider from "../components/slider";
import { useContext, useState } from "react";
import CraftItemsSection from "../components/CraftItemsSection";
import CraftCategoriesSection from "../components/CraftCategoriesSection";
import { AuthContext } from "../authProvider/AuthProvider";
import Team from "../components/Team";

const Home = () => {
  const loaderData = useLoaderData();
  const [crafts, setCrafts] = useState(loaderData.slice(0, 6));
  const { loading, allData } = useContext(AuthContext);

  return (
    <div className="space-y-24 ">
      {/* Slider */}
      <Slider></Slider>

      {/* Craft Item  section */}
      {loading ? (
        <h1 className="font-bold text-4xl text-center m-10">Loading...</h1>
      ) : (
        <CraftItemsSection
          crafts={crafts}
          setCrafts={setCrafts}
          loaderData={allData}
        ></CraftItemsSection>
      )}

      {/* craft category section */}
      <CraftCategoriesSection></CraftCategoriesSection>

      {/* our team section */}
      <Team></Team>
    </div>
  );
};

export default Home;
