import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import Swal from "sweetalert2";

const AddCraft = () => {
  const { user } = useContext(AuthContext);

  // handle
  const handleAddCraft = (event) => {
    event.preventDefault();

    const form = event.target;

    const item_name = form.item_name.value;
    const subcatagoryName = form.subcatagoryName.value;
    const userEmail = form.userEmail.value;
    const userName = form.userName.value;
    const price = form.price.value;
    const stockStatus = form.stockStatus.value;
    const rating = form.rating.value;
    const processingTime = form.processingTime.value;
    const customization = form.customization.value;
    const photoURL = form.photoURL.value;
    const description = form.description.value;

    const newCraft = {
      item_name,
      subcatagoryName,
      userEmail,
      userName,
      price,
      stockStatus,
      rating,
      processingTime,
      customization,
      photoURL,
      description,
    };

    console.log(newCraft);

    // send data to the server
    fetch("http://localhost:3000/crafts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCraft),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "data successfully created",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="bg-base-200 p-24">
      <h2 className="text-3xl font-extrabold">Add a Craft</h2>
      <form onSubmit={handleAddCraft}>
        {/* form name and quantity row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Craft Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="item_name"
                placeholder="Craft Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          {/* Subcategory Name */}
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full "
                name="subcatagoryName"
              >
                <option defaultValue="not select" disabled selected>
                  Select Subcategory Name
                </option>
                <option value="ClayMadePottery">Clay-made pottery</option>
                <option value="Stoneware">Stoneware</option>
                <option value="Porcelain">Porcelain</option>
                <option value="TerraCotta">Terra Cotta</option>
                <option value="Ceramics&Architectural">
                  Ceramics & Architectural
                </option>
                <option value="HomeDecorPottery">Home decor pottery</option>
              </select>
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <label className="input-group">
              <input
                defaultValue={user?.email}
                type="text"
                name="userEmail"
                placeholder="User Email"
                className="input input-bordered w-full"
                disabled
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <label className="input-group">
              <input
                disabled
                defaultValue={user?.displayName}
                type="text"
                name="userName"
                placeholder="User Name"
                className="input input-bordered w-full "
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full "
                name="stockStatus"
              >
                <option defaultValue="not select" disabled selected>
                  Select Stock Status
                </option>
                <option defaultValue="In Stock">In Stock</option>
                <option defaultValue="Out of Stock">Out of Stock</option>
              </select>
            </label>
          </div>
        </div>
        {/* select row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <label className="input-group">
              <select className="select select-bordered w-full " name="rating">
                <option defaultValue="not select" disabled selected>
                  Select Rating
                </option>
                <option defaultValue="1">1</option>
                <option defaultValue="2">2</option>
                <option defaultValue="3">3</option>
                <option defaultValue="4">4</option>
                <option defaultValue="5">5</option>
              </select>
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full "
                name="processingTime"
              >
                <option defaultValue="not select" disabled selected>
                  Select Processing time
                </option>
                <option defaultValue="1d">1d</option>
                <option defaultValue="2d">2d</option>
                <option defaultValue="3d">3d</option>
                <option defaultValue="5d">5d</option>
                <option defaultValue="6d">6d</option>
              </select>
            </label>
          </div>
        </div>
        {/* select row */}
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <label className="input-group">
              <select
                className="select select-bordered w-full "
                name="customization"
              >
                <option defaultValue="not select" disabled selected>
                  Select Customization
                </option>
                <option defaultValue="No">No</option>
                <option defaultValue="Yes">Yes</option>
              </select>
            </label>
          </div>
        </div>
        {/* form Photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* Description row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <textarea
                className="textarea textarea-bordered w-full"
                name="description"
                rows="5"
                placeholder="Description"
              ></textarea>
            </label>
          </div>
        </div>
        <input
          type="submit"
          value="Add Craft"
          className="btn btn-block bg-[#e35353] text-white hover:bg-[#e35353]"
        />
      </form>
    </div>
  );
};

export default AddCraft;
