import React from "react";
import index from "./pages/Login/index";
import { Routes, Route } from "react-router-dom";
import Auth from "./pages/Login/Auth";
import PrivateOutlet from "./components/privateOutlet";
import Home from "./pages/home";
import Button from "./components/button";
import Rankings from "./pages/rankings";
import Userhome from "./pages/userhome";
import { useLogin } from "./hooks/useLogin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Auth />} />
      <Route path="/user" element={<PrivateOutlet />}>
        <Route path="home" element={<Userhome />} />
        <Route path="rankings" element={<Rankings />} />
      </Route>
    </Routes>
  );
}

export default App;
