import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import OwnCreateCraft from "../components/OwnCreateCraft";
import { IoIosArrowDown } from "react-icons/io";

const MyArts = () => {
  const { user } = useContext(AuthContext);
  const [userCrafts, setUserCrafts] = useState([]);

  const [allYesNo, setAllYesNo] = useState("");

  // condision on customization

  useEffect(() => {
    fetch(
      `https://pottery-backend-server.vercel.app/myArts/${user.email}/${allYesNo}`
    )
      .then((res) => res.json())
      .then((data) => {
        setUserCrafts(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [allYesNo]);

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10 mt-6">
        My Arts - {userCrafts.length}
      </h2>
      {/* filter button */}
      <div className="flex justify-end">
        <details className="dropdown">
          <summary className="mb-10 btn bg-[#E35353] border-none hover:bg-[#E35353] text-white rounded-md btn-md px-4 pl-7">
            {`Customization (filter)`} <IoIosArrowDown className="text-2xl" />
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a onClick={() => setAllYesNo("")}>All</a>
            </li>
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a onClick={() => setAllYesNo("Yes")}>Yes</a>
            </li>
            <li className="hover:bg-[#E35353] hover:text-white rounded-lg">
              <a onClick={() => setAllYesNo("No")}>No</a>
            </li>
          </ul>
        </details>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {userCrafts.map((craft) => (
          <OwnCreateCraft
            key={craft._id}
            craft={craft}
            userCrafts={userCrafts}
            setUserCrafts={setUserCrafts}
          ></OwnCreateCraft>
        ))}
      </div>
    </div>
  );
};

export default MyArts;
