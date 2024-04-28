import { Link } from "react-router-dom";

const Categories2 = () => {
  return (
    <Link to="/categories/Stoneware">
      <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#000000B3,#000000B3),url('img/slide22.jpg')] h-[250px] bg-cover bg-center rounded-xl">
        <div className="text-center text-white space-y-8">
          <h2 className="md:text-3xl text-3xl font-bold text-white capitalize ">
            Stoneware
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default Categories2;
