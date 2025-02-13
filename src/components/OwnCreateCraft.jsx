import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { MdOutlineTimer } from "react-icons/md";
import { FiEdit3 } from "react-icons/fi";
import { FaStar } from "react-icons/fa6";

const OwnCreateCraft = ({ craft, setUserCrafts, userCrafts }) => {
  // delete method
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://pottery-backend-server.vercel.app/crafts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
              const reamining = userCrafts.filter((craft) => craft._id !== id);
              setUserCrafts(reamining);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
      }
    });
  };

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

        <div className="flex justify-between items-center font-[500]">
          <div className="flex items-center gap-1">
            <FaStar className="text-[#E35353] text-2xl" />{" "}
            <span className="text-lg font-bold ">{craft.rating}.0</span>
          </div>
          <div className=" space-x-3">
            <Link to={`/craftUpdate/${craft._id}`}>
              <button className="btn btn-md text-white   bg-[#E35353]   rounded-sm  hover:bg-[#E35353] border-none  ">
                Update
              </button>
            </Link>

            <button
              onClick={() => handleDelete(craft._id)}
              className="btn btn-md text-white   bg-[#E35353]   rounded-sm  hover:bg-[#E35353] border-none  "
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
