import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import OwnCreateCraft from "../components/OwnCreateCraft";

const MyArts = () => {
  const { user } = useContext(AuthContext);
  const [userCrafts, setUserCrafts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/myArts/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUserCrafts(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [user]);

  return (
    <div>
      <h2 className="text-5xl font-bold text-center mb-10 mt-6">
        My Arts - {userCrafts.length}
      </h2>
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
