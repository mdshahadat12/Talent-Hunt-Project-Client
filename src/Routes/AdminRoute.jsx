/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spiner from "../Components/Shared/Spiner";
import UserRoledata from "../API/GetData";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const { role, isLoading } = UserRoledata();
  const location = useLocation()
  console.log(location);
  if (loading || isLoading) {
    return <Spiner/>
  }
  if (user && role == 'admin') {
    return <div>{children}</div>;
  } else {
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
  }
};

export default AdminRoute;
