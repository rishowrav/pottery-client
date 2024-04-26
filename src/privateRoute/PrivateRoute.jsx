import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <h1 className="text-4xl font-bold text-center h-[400px] flex items-center justify-center">
        <span>Loading.....</span>
      </h1>
    );
  }

  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
  children: PropTypes.node,
};
