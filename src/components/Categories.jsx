import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({ categorie }) => {
  return (
    <Link to={`/selectedCategories/${categorie?.subcatagoryName}`}>
      <div>
        <div
          className={`flex justify-center items-center z-0 bg-[linear-gradient(45deg,#000000B3,#000000B3),url('https://i.ibb.co/mBhJWCX/pexels-steve-1269968.jpg')] h-[250px] bg-cover bg-center rounded-none`}
        >
          <div className="text-center text-white space-y-8">
            <h2 className="md:text-3xl text-3xl font-bold text-white capitalize ">
              {categorie?.name}
            </h2>
            {/* <span className="text-xs">{categorie?.cover_photo}</span> */}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Categories;

Categories.propTypes = {
  categorie: PropTypes.object,
};
