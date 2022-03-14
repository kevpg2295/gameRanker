import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import NavbarUser from "../navbarUser";

const PrivateOutlet = () => {
  const token = useSelector((state) => state.auth.token);
  console.log(token);

  return token ? (
    <div>
      <NavbarUser /> <Outlet />
    </div>
  ) : (
    <Navigate to="/login" />
  );
};

export default PrivateOutlet;
