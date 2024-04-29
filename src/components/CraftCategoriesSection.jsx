import { Fade } from "react-awesome-reveal";
import Categories from "./Categories";
import { useEffect, useState } from "react";

const CraftCategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`https://pottery-backend-server.vercel.app/categories/`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCategories(data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="space-y-16 p-16 pt-20 bg-base-200">
      <Fade duration={1500}>
        <div className="space-y-4">
          <h3 className="text-2xl font-bold leading-none sm:text-5xl">
            Explore Other Catagories
          </h3>
          <p className="max-w-2xl ">
            Browse through our diverse range of categories to discover more
            exceptional products, each meticulously curated to meet your needs
            and elevate your experience. Explore now!
          </p>
        </div>
      </Fade>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <Fade duration={1500}>
          {categories.map((categorie) => (
            <Categories key={categorie._id} categorie={categorie}></Categories>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default CraftCategoriesSection;
