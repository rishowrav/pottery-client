import { FaBath, FaBed, FaHome } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const OwnCreateCraft = ({ craft, setUserCrafts, userCrafts }) => {
  // delete method
  const handleDelete = (id) => {
    fetch(`http://localhost:3000/crafts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          const reamining = userCrafts.filter((craft) => craft._id !== id);
          setUserCrafts(reamining);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card realNest-card rounded-none bg-base-200 hover:shadow-xl duration-300 cursor-pointer">
      <figure className="relative ">
        <button className="btn btn-sm text-white border-none rounded-sm bg-[#FF6647] hover:bg-[#FF6647]  absolute right-6 top-6 ">
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
          <li className="px-3 py-2 text-[#FF6647]  rounded-full flex items-center gap-1">
            <FaBed /> <span className="text-xs">44 Bed</span>
          </li>
          <li className="px-3 py-2 text-[#FF6647]  rounded-full flex items-center gap-1">
            <FaBath /> <span className="text-xs">32 Bath</span>
          </li>
          <li className="px-3 py-2 text-[#FF6647]  rounded-full flex items-center gap-1">
            <FaHome /> <span className="text-xs">21 sqft</span>
          </li>
        </ul>
        <h2 className=" text-xl font-bold  ">{craft.item_name}</h2>
        <p className=" text-md">{craft.subcatagoryName}</p>

        <hr className="border border-dashed my-2 mt-2" />
        <div className="flex justify-between items-center font-[500]">
          <div className="flex items-center gap-1">
            <IoLocationSharp className="text-[#FF6647] text-xl" />{" "}
            <span className="text-sm ">location</span>
          </div>
          <div className=" space-x-3">
            <Link to={`/cardDetails/${craft._id}`}>
              <button className="btn btn-md text-[#FF6647] hover:text-white duration-300 hover:border-[#FF6647] border-1  rounded-sm border-[#FF6647] bg-transparent  hover:bg-[#FF6647]  ">
                View Details
              </button>
            </Link>
            <button
              onClick={() => handleDelete(craft._id)}
              className="btn btn-md text-white   bg-[#FF6647]   rounded-sm  hover:bg-[#FF6647] border-none  "
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OwnCreateCraft;
OwnCreateCraft.propTypes = {
  craft: PropTypes.array,
};

OwnCreateCraft.propTypes = {
  setUserCrafts: PropTypes.func,
};
OwnCreateCraft.propTypes = {
  userCrafts: PropTypes.array,
};
