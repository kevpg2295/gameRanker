import React from "react";
import Button from "../../components/button";
import { useLogin } from "../../hooks/useLogin";

const Userhome = () => {
  const { onSignOut } = useLogin();
  return (
    <div>
      <Button onClick={onSignOut} text={"Sign out"} />
    </div>
  );
};

export default Userhome;
