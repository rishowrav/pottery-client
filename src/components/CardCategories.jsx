import { FiEdit3 } from "react-icons/fi";
import { MdOutlineTimer } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const CardCategories = ({ craft }) => {
  return (
    <div className="card realNest-card rounded-none bg-base-200 hover:shadow-xl duration-300 cursor-pointer">
      <figure className="relative ">
        <button className="btn btn-sm text-white border-none rounded-sm bg-[#E35353] hover:bg-[#E35353]  absolute right-6 top-6 ">
          {craft.stockStatus}
        </button>
        <div className="  w-full md:h-[280px] flex justify-center items-center  ">
          <img
            src={craft.photoURL}
            alt="Shoes"
            className="w-full h-full object-cover"
          />
        </div>
      </figure>
      <div className="card-body p-6  font-[500] ">
        <div className="flex justify-between items-center">
          <span
            className="border border-gray-300 px-3 py-2 rounded 
           text-sm"
          >
            <span className="text-xs">Added by:</span>{" "}
            <span className="font-bold">{craft.userName}</span>
          </span>
          <span className="text-md  font-bold">${craft.price}</span>
        </div>
        <ul className="flex justify-between items-center text-sm">
          <li className="px-3 py-2 text-[#E35353]  rounded-full flex items-center gap-1">
            <MdOutlineTimer />{" "}
            <span className="text-xs">
              Processing Time: {craft.processingTime}
            </span>
          </li>
          <li className="px-3 py-2 text-[#E35353]  rounded-full flex items-center gap-1">
            <FiEdit3 />{" "}
            <span className="text-xs">
              Customization: {craft.customization}
            </span>
          </li>
        </ul>
        <h2 className=" text-xl font-bold  ">{craft.item_name}</h2>
        <p className=" text-md">{craft.subcatagoryName}</p>

        <hr className="border border-dashed my-2 mt-2" />
        {/* description */}
        <p className="text-sm dark:text-gray-500 font-normal">
          {craft.description.slice(0, 120)}...
        </p>
        <hr className="border border-dashed my-2 mt-2" />
        <div className="flex justify-between items-center font-[500]">
          <div className="flex items-center gap-1">
            <FaStar className="text-[#E35353] text-2xl" />{" "}
            <span className="text-lg font-bold ">{craft.rating}.0</span>
          </div>
          <div className="">
            <Link to={`/cardDetails/${craft._id}`}>
              <button className="btn btn-md text-[#E35353] hover:text-white duration-300 hover:border-[#E35353] border-1  rounded-sm border-[#E35353] bg-transparent  hover:bg-[#E35353]  ">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCategories;

CardCategories.propTypes = {
  craft: PropTypes.object,
};
