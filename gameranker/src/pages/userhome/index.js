import React from "react";
import Button from "../../components/button";
import SearchBar from "../../components/searchbar";
import { useLogin } from "../../hooks/useLogin";

const Userhome = () => {
  const { onSignOut } = useLogin();
  return (
    <div>
      <SearchBar />
      <Button onClick={onSignOut} text={"Sign out"} />
    </div>
  );
};

export default Userhome;
