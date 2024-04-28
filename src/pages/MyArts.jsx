import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import Card from "../components/Card";

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
      <h1>My Arts</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {userCrafts.map((craft) => (
          <Card key={craft._id} craft={craft}></Card>
        ))}
      </div>
    </div>
  );
};

export default MyArts;
