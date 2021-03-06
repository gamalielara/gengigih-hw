import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { updateToken } from "../../redux/tokenSlice";
import { Link } from "react-router-dom";
import "./auth.css";
import { Token } from "../../global/interface";

const Auth: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const query = window.location.hash.substr(1).split(/&/g);
    const urlToken = query[0].split("=")[1];
    if (urlToken) {
      dispatch(updateToken(urlToken));
      localStorage.setItem("user", urlToken);
      window.history.pushState({}, "", "/auth");
    }
  });

  const token = useSelector((state: Token) => state.token.value);

  return (
    <>
      {token && (
        <div className="auth">
          <h1>Authentication is Successful!</h1>
          <Link to="/me">Continue to Soptify</Link>
        </div>
      )}
    </>
  );
};

export default Auth;
