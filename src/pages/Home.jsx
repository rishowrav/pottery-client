import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import Slider from "../components/slider";
import { useState } from "react";

const Home = () => {
  const loaderData = useLoaderData();
  const [crafts, setCrafts] = useState(loaderData.slice(0, 6));

  return (
    <div className="space-y-24 ">
      {/* <h1 className="text-4xl">Home</h1> */}
      <Slider></Slider>

      {/* card section */}
      <div className="space-y-10">
        <div className="text-center space-y-2">
          <h2 className="text-4xl font-bold">
            Craft Items Section {crafts.length}
          </h2>
          <p className="text-lg w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            sed tempore. Eius illum quia repellendus quidem repellat sint,
            distinctio sed!
          </p>
        </div>
        {/* all card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-5">
          {crafts.map((craft) => (
            <Card key={craft._id} craft={craft}></Card>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={() => setCrafts(loaderData.slice(0, 12))}
            className="btn bg-[#E35353] hover:bg-[#E35353] border-none btn-md px-10 text-white rounded-none "
          >
            Show All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
