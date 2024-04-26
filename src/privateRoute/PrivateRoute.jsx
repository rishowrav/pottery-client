import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (user) {
    return <div>{children}</div>;
  }

  if (loading) {
    return (
      <h1 className="text-4xl font-bold text-center h-[400px] flex items-center justify-center">
        <span>Loading.....</span>
      </h1>
    );
  }

  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
