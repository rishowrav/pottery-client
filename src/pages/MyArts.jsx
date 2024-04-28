import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import OwnCreateCraft from "../components/OwnCreateCraft";

const MyArts = () => {
  const { user } = useContext(AuthContext);
  const [userCrafts, setUserCrafts] = useState([]);

  const [allYesNo, setAllYesNo] = useState("");

  // condision on customization

  useEffect(() => {
    fetch(`http://localhost:3000/myArts/${user.email}/${allYesNo}`)
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
      <div>
        <details className="dropdown">
          <summary className="mb-6 btn bg-[#FF6647] border-none hover:bg-[#FF6647] text-white rounded-md btn-md px-14">
            {`Customization (filter)`}
          </summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li className="hover:bg-[#FF6647] hover:text-white rounded-lg">
              <a onClick={() => setAllYesNo("")}>All</a>
            </li>
            <li className="hover:bg-[#FF6647] hover:text-white rounded-lg">
              <a onClick={() => setAllYesNo("Yes")}>Yes</a>
            </li>
            <li className="hover:bg-[#FF6647] hover:text-white rounded-lg">
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
