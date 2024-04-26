import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import { AuthContext } from "../authProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Register = () => {
  const [toggle, setToggle] = useState(true);
  const { createUser } = useContext(AuthContext);

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // form submit
  const onSubmit = ({ name, photoURL, email, password }) => {
    // password verification
    if (!/[A-Z]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "password must have an Uppercase letter",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (!/[a-z]/.test(password)) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "password must have an Lowercase letter",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (password.length <= 5) {
      Swal.fire({
        position: "top-end",
        icon: "warning",
        title: "password length must be at least 6 character",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      // createUser with email and password
      createUser(email, password)
        .then((result) => {
          console.log(result.user);
          updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL,
          }).then(() => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Registered your account",
              showConfirmButton: false,
              timer: 1500,
            });
          });
        })
        .catch((error) => {
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Something is wrong",
            showConfirmButton: false,
            timer: 1500,
            html: `${error.message}`,
          });
        });

      console.log({ name, photoURL, email, password });
    }
  };

  return (
    <div className="mt-6 " data-aos="fade-up" data-aos-duration="1000">
      <Helmet>
        <title>Pottery | Register</title>
      </Helmet>
      {/* login from */}
      <div className="w-full max-w-lg p-4 mx-auto rounded-md shadow sm:p-8 bg-base-200 ">
        <h2 className="mb-3 text-3xl font-semibold text-center">Register</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate=""
          action=""
          className="space-y-6"
        >
          <div className="space-y-4">
            {/* name */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Name
              </label>
              <input
                {...register("name", { required: true })}
                type="text"
                placeholder="Enter your Name"
                className="w-full px-3 py-3 border rounded-md border-gray-600 bg-base-100 "
              />
              {errors.name && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            {/* photo url */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Photo URL
              </label>
              <input
                {...register("photoURL", { required: false })}
                type="text"
                placeholder="Photo URL"
                className="w-full px-3 py-3 border rounded-md border-gray-600 bg-base-100"
              />
              {errors.photoURL && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            {/* email */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                placeholder="Email"
                className="border w-full px-4 py-3 rounded-md border-gray-600 bg-base-100"
              />
              {errors.email && (
                <span className="text-red-700">This field is required</span>
              )}
            </div>
            {/* password */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <div className="relative">
                <input
                  {...register("password", { required: true })}
                  type={toggle ? "password" : "text"}
                  placeholder="*****"
                  className="w-full px-3 py-3 border rounded-md border-gray-600 bg-base-100"
                />
                <span
                  onClick={() => setToggle(!toggle)}
                  className="absolute top-[14px] right-4 cursor-pointer"
                >
                  {toggle ? (
                    <IoEyeOutline className="text-2xl  " />
                  ) : (
                    <IoEyeOffOutline className="text-2xl " />
                  )}
                </span>
              </div>
              {errors.password && (
                <span className="text-red-700 block">
                  This field is required
                </span>
              )}
            </div>
          </div>
          <button className="w-full px-8 py-4 font-semibold rounded-md bg-gray-800  text-white ">
            Register
          </button>
        </form>
        <p className="text-sm text-center mt-5 text-gray-400">
          Already you have account.{" "}
          <Link
            to="/login"
            href="#"
            rel="noopener noreferrer"
            className="focus:underline hover:underline text-[#FF6647]  font-bold"
          >
            Login
          </Link>{" "}
          here
        </p>
      </div>
    </div>
  );
};

export default Register;
