const Feature = () => {
  return (
    <section className="p-4 space-y-10 lg:p-8 bg-base-200 ">
      <div className="space-y-4 pt-8">
        <h3 className="text-2xl font-bold leading-none sm:text-5xl">Feature</h3>
        <p className="max-w-2xl ">
          Our featured items highlight the best of our ceramics and pottery
          collection, showcasing top-quality craftsmanship and innovative
          designs that captivate and enhance any environment with style and
          functionality.
        </p>
      </div>
      <div className="container mx-auto space-y-12">
        {/* feature 1 */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/img/feature1.jpg"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-base-100">
            <span className="text-xs uppercase text-gray-400">Explore now</span>
            <h3 className="text-3xl font-bold">
              Stone by Mercer Project Katachi 16-Piece Dinnerware Set Stoneware
            </h3>
            <p className="my-6 text-gray-400">
              Stone by Mercer oval collection is a 16-piece stoneware dinnerware
              set. The oval dish set includes four dinner plates four salad
              plates four bowls and four cups.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>

        {/* featuer 2 */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="/img/feature3.jpg"
            alt=""
            className="h-80 bg-gray-500 aspect-video object-cover"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-base-100">
            <span className="text-xs uppercase text-gray-400">Explore now</span>
            <h3 className="text-3xl font-bold">
              Stone by Mercer Project Hekonda Debossed 16-Piece Dinnerware Set
              Stoneware
            </h3>
            <p className="my-6 text-gray-400">
              Stone by mercer dented deboss collection is a 16 pieces stoneware
              dinnerware set. The dishes have an organic round shape and uneven
              surfaces, which gives an earthy and rustic feel.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>

        {/* featuer 3 */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="/img/feature2.jpg"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-base-100">
            <span className="text-xs uppercase text-gray-400">explore now</span>
            <h3 className="text-3xl font-bold">
              Stone Lain Celina 16-Piece Dinnerware Set Stoneware
            </h3>
            <p className="my-6 text-gray-400">
              Mid-century Modern Design - This rustic dinnerware collection
              features a lipped rim design on each plate.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
