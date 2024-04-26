import Card from "../components/Card";
import Slider from "../components/slider";

const Home = () => {
  return (
    <div className="space-y-24 mb-24">
      {/* <h1 className="text-4xl">Home</h1> */}
      <Slider></Slider>

      {/* card section */}
      <div className="space-y-10">
        <div className="text-center text-gray-700 space-y-2">
          <h2 className="text-4xl font-bold">Craft Items Section</h2>
          <p className="text-lg w-2/3 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae,
            sed tempore. Eius illum quia repellendus quidem repellat sint,
            distinctio sed!
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gird-cols-1 gap-5">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
