import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
// import Lottie from "lottie-react";
// import Parrot from "../../public/Parrot.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return (
      <div className="w-[200px] mx-auto">
        {/* <Lottie loop={true} animationData={Parrot}></Lottie> */}
        <h1 className="text-4xl font-bold text-center h-[400px] flex items-center justify-center">
          <span>Loading.....</span>
        </h1>
      </div>
    );
  }

  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
