import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    //change automatically
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header></Header>
      <div className="absolute">
        <img className="filter brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="logo"
        />
      </div>
      <form className="w-4/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg">
        <h1 className="font-bold text-3xl py-4  ">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </h1>

        {isSignInForm && (
          <input
            type="text"
            placeholder=" Full Name"
            className="p-4 my-4 w-full bg-gray-700 rounded-lg"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 rounded-lg"
        ></input>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign Up" : "Sign In"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "Already registerd? Sign In now" : "New to Netflix? Sign Up Now"
           }
        </p>
      </form>
    </div>
  );
};

export default Login;
