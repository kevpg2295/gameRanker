import { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actLogin, actLogout } from "../features/token/authSlice";

export const useLogin = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const onFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(e.message, e.code);
    }
  };

  const onGoogleClick = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const response = await signInWithPopup(auth, provider);
      const credential = GoogleAuthProvider.credentialFromResult(response);
      const token = credential.accessToken;

      dispatch(
        actLogin(token, () => {
          navigate("/user/home");
        })
      );

      console.log(token);
      console.log(response.user);
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      console.log(error.email);
    }
  };

  const onSignOut = async () => {
    try {
      const signedOut = await signOut(auth);

      dispatch(actLogout(), () => {
        navigate("/");
      });
      console.log(auth, "auth");
    } catch (e) {
      console.log(e);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  return {
    email,
    password,
    onFormSubmit,
    onGoogleClick,
    onSignOut,
    handleChangeEmail,
    handleChangePassword,
  };
};
