import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(true);

  // createUser
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // loginUser
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // current user logged in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(true);
        setUser(user);
        setLoading(false);
      } else {
        setLoading(false);
      }

      return () => unsubscribe();
    });
  });

  // fetch all data to mongoDb
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    fetch("https://pottery-backend-server.vercel.app/crafts")
      .then((res) => res.json())
      .then((data) => {
        setLoading(true);
        setAllData(data);
        setLoading(false);
      });
  }, []);

  const dataInfo = {
    createUser,
    loginUser,
    user,
    setUser,
    loading,
    allData,
  };

  return (
    <AuthContext.Provider value={dataInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node,
};
