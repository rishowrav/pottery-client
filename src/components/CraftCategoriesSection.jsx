import Categories from "./Categories";

const CraftCategoriesSection = () => {
  return (
    <div className="space-y-16">
      <h1 className="text-5xl font-bold text-center">Category section</h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        <Categories></Categories>
        <Categories></Categories>
        <Categories></Categories>
        <Categories></Categories>
        <Categories></Categories>
        <Categories></Categories>
      </div>
    </div>
  );
};

export default CraftCategoriesSection;
