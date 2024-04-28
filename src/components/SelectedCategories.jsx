import { useLoaderData } from "react-router-dom";
import CardCategories from "./CardCategories";

const SelectedCategories = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10 mt-4">
        Selected Categoried - {loaderData.length}
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {loaderData.map((data) => (
          <CardCategories key={data._id} craft={data}></CardCategories>
        ))}
      </div>
    </div>
  );
};

export default SelectedCategories;
