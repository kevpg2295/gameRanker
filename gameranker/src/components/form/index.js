import React from "react";

const Form = ({ onSubmit, children }) => {
  return <form onSubmit={(e) => onSubmit(e)}>{children}</form>;
};

export default Form;
