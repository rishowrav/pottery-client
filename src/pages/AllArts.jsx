import { Link, useLoaderData } from "react-router-dom";

const AllArts = () => {
  const crafts = useLoaderData();

  return (
    <div className="overflow-x-auto space-y-6 mt-6">
      <h1 className="text-4xl text-center font-bold">
        Total Crafts {crafts.length}
      </h1>

      <table className="table ">
        {/* head */}
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>SUBCATEGORY NAME</th>
            <th>PRICE</th>
            <th>STOCK STATUS</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {crafts.map((craft, index) => (
            <tr key={craft._id}>
              <th>{index + 1}</th>
              <th>{craft.item_name}</th>
              <td>{craft.subcatagoryName}</td>
              <td>${craft.price}</td>
              <td>{craft.stockStatus}</td>
              <td className="flex gap-2">
                <Link to={`/cardDetails/${craft._id}`}>
                  <button className="btn bg-[#E35353] hover:bg-[#E35353] border-none btn-sm text-white rounded-none ">
                    View Details
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllArts;
