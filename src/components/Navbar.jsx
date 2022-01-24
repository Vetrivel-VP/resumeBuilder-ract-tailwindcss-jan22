import React from "react";
import GoogleLogin from "react-google-login";
import { Link, NavLink, useNavigate } from "react-router-dom";

import Logo from "../assets/img/logo.png";

const Navbar = () => {
  const responseGoogle = () => {};

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img src={Logo} className="w-20 cursor-pointer" alt="" />
        </Link>

        <GoogleLogin
          clientId={""}
          render={(renderProps) => (
            <button
              type="button"
              className="bg-mainColor  rounded-lg cursor-pointer outline-none border border-gray-300 px-4 py-2
                hover:shadow-md duration-75 transition-all ease-in-out
              "
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Login
            </button>
          )}
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </div>
    </div>
  );
};

export default Navbar;
