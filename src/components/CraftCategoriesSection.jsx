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
      <div className="space-y-4">
        <h3 className="text-2xl font-bold leading-none sm:text-5xl">
          Explore Other Mediums - {categories.length}
        </h3>
        <p className="max-w-2xl ">
          The Crucible is the largest industrial arts nonprofit in the country,
          where we offer classes and studio time in 19+ areas. In these guides,
          we break down our studio areas and focus on sharing the knowledge of
          our instructors with you
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {categories.map((categorie) => (
          <Categories key={categorie._id} categorie={categorie}></Categories>
        ))}
      </div>
    </div>
  );
};

export default CraftCategoriesSection;
