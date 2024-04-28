import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const SelectedCategories = () => {
  const loaderData = useLoaderData();

  return (
    <div>
      <h2 className="text-4xl font-bold text-center mb-10 mt-4">
        Selected Categoried{" "}
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-3 gap-5">
        {loaderData.map((data) => (
          <Card key={data._id} craft={data}></Card>
        ))}
      </div>
    </div>
  );
};

export default SelectedCategories;
