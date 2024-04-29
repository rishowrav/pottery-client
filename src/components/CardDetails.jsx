import { Fade } from "react-awesome-reveal";
import { useLoaderData } from "react-router-dom";

const CardDetails = () => {
  const craft = useLoaderData();

  return (
    <Fade duration={1500}>
      <div className=" bg-base-200 mb-5 ">
        <div className="space-y-4">
          {/* cover image */}
          <Fade duration={1500}>
            <figure
              className="space-y-2 relative"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <button className="btn btn-md text-xl text-white border-none rounded-sm bg-[#E35353] hover:bg-[#E35353]  absolute right-6 bottom-6 ">
                {craft.stockStatus}
              </button>
              <img
                src={craft.photoURL}
                alt=""
                className="block object-cover object-center w-full h-[400px] md:h-[500px] bg-gray-500"
              />
            </figure>
          </Fade>

          <div
            className="space-y-4 px-8 pb-4 "
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className=" w-full  md:space-y-4 space-y-2  ">
              <dir className="flex justify-between flex-col sm:flex-row pl-0 items-center">
                {/* title */}
                <h2 className="md:text-4xl text-xl playfair-display-font font-[800] my-10 sm:w-2/3">
                  {craft.item_name}
                </h2>
                <span className="rounded-xl font-bold bg-[#E353531A] px-4 py-3 text-[#E35353E6] md:text-base text-sm">
                  {craft.subcatagoryName}
                </span>
              </dir>

              <hr className="border border-[#E3535396] border-b-0 my-4 mt-3" />

              {/* description */}
              <p className="py-2">
                <span className="font-bold text-[#E35353]">Details:</span>{" "}
                <span className="">{craft.description}</span>
              </p>

              <hr className="border border-[#E3535396] border-b-0 my-4 mt-3" />

              {/* Location */}
              <div className="flex items-center gap-2">
                <span className="text-md ">
                  <b>Added by:</b> {craft.userName}
                </span>
              </div>

              <hr className="border border-[#E3535396] border-b-0 my-4 mt-3" />

              {/* table and price */}
              <div className="pt-2 flex justify-between flex-col gap-10 sm:flex-row items-center  mx-2">
                <table className="table sm:w-2/3 ">
                  <tbody className="">
                    {/* row 1 */}
                    <tr className="border-none ">
                      <td className="p-1 lg:w-[200px]">Processing Time:</td>
                      <td className="font-bold p-1">{craft.processingTime}</td>
                    </tr>
                    {/* row 2 */}
                    <tr className="border-none">
                      <td className="p-1 lg:w-[200px]">Customization:</td>
                      <td className="font-bold p-1">{craft.customization}</td>
                    </tr>
                    {/* row 3 */}
                    <tr className="border-none">
                      <td className="p-1 lg:w-[200px]">Rating</td>
                      <td className="font-bold p-1">{craft.rating}.0</td>
                    </tr>
                  </tbody>
                </table>
                <div className="bg-[#E353531A] sm:bg-transparent px-4 sm:p-0 py-3 w-full sm:w-auto">
                  <span className="font-bold ">Price: </span>
                  <span className="font-bold text-3xl md:text-5xl text-[#E35353]">
                    ${craft.price}
                  </span>
                </div>
              </div>
            </div>
            {/* end */}

            <hr className="border border-[#E3535396] border-b-0 my-4 mt-3" />
            <div className="flex justify-end">
              <button className="btn btn-sm md:btn-md lg:btn-lg hover:text-[#E35353] text-white duration-300 border-[#E35353] border-1  rounded-sm hover:border-[#E35353] hover:bg-transparent  bg-[#E35353]  ">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CardDetails;
