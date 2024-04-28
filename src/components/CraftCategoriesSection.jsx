import Categories from "./Categories";
import { useEffect, useState } from "react";

const CraftCategoriesSection = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/`)
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
    <div className="space-y-16">
      <h1 className="text-5xl font-bold text-center">
        Category section {categories.length}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {categories.map((categorie) => (
          <Categories key={categorie._id} categorie={categorie}></Categories>
        ))}
      </div>
    </div>
  );
};

export default CraftCategoriesSection;
