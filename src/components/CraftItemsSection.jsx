import Card from "./Card";
import PropTypes from "prop-types";

const CraftItemsSection = ({ crafts, setCrafts, loaderData }) => {
  return (
    <div className="space-y-10 ">
      <div className="text-center space-y-2">
        <h2 className="text-5xl font-bold">Our Products</h2>
        <p className="text-lg w-2/3 mx-auto">
          Discover our exquisite collection of ceramics and pottery,
          meticulously crafted for both functional and decorative purposes,
          adding elegance to any space.
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
  );
};

export default CraftItemsSection;

CraftItemsSection.propTypes = {
  setCrafts: PropTypes.func,
};
CraftItemsSection.propTypes = {
  crafts: PropTypes.array,
};
CraftItemsSection.propTypes = {
  loaderData: PropTypes.array,
};
