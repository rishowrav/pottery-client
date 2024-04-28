const Feature = () => {
  return (
    <section className="p-4 space-y-10 lg:p-8 bg-base-200 ">
      <div className="space-y-4 pt-8">
        <h3 className="text-2xl font-bold leading-none sm:text-5xl">Feature</h3>
        <p className="max-w-2xl ">
          At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
          quam natus quis nihil quod, hic explicabo doloribus magnam neque,
          exercitationem eius sunt!
        </p>
      </div>
      <div className="container mx-auto space-y-12">
        {/* feature 1 */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?1"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-base-100">
            <span className="text-xs uppercase text-gray-400">
              Join, its free
            </span>
            <h3 className="text-3xl font-bold">
              We are not reinventing the wheel
            </h3>
            <p className="my-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>

        {/* featuer 2 */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src="https://source.unsplash.com/640x480/?2"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-base-100">
            <span className="text-xs uppercase text-gray-400">
              Join, its free
            </span>
            <h3 className="text-3xl font-bold">
              Were not reinventing the wheel
            </h3>
            <p className="my-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
            </p>
            <button type="button" className="self-start">
              Action
            </button>
          </div>
        </div>

        {/* featuer 3 */}
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src="https://source.unsplash.com/640x480/?3"
            alt=""
            className="h-80 bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 bg-base-100">
            <span className="text-xs uppercase text-gray-400">
              Join, its free
            </span>
            <h3 className="text-3xl font-bold">
              We are not reinventing the wheel
            </h3>
            <p className="my-6 text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
              aliquam possimus quas, error esse quos.
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
