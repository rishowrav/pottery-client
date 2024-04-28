import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div>
      <Link>
        <div className="slider slider1 flex justify-center items-center z-0 bg-[linear-gradient(45deg,#00000080,#00000080),url('img/slide22.jpg')] h-[250px] bg-cover bg-center rounded-xl">
          <div className="text-center text-white space-y-8">
            <h2 className="md:text-4xl text-4xl font-bold text-white capitalize  mx-auto w-4/5">
              Categories
            </h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Categories;
