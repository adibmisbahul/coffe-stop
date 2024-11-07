import axios from "axios";
import { useEffect, useState } from "react";

const FormLogin = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const loginData = {
    username: username,
    password: password,
  };

  const handleLogin = async () => {
    const response = await fetch("http://localhost:2134/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });
    const data = await response.json();
    const userData = data.data[0].username;
    if (userData === null) {
      alert("username null");
    } else {
      localStorage.setItem("nama", userData);
      console.log(userData);
    }
  };

  return (
    <div className="rounded-[calc(1.5rem-1px px-10 p-12 ">
      <div>
        <h1 className="text-xl font-semibold text-gray-800 ">
          Signin to your account
        </h1>
        <p className="text-sm tracking-wide text-gray-600 ">
          Don't have an account ?{" "}
          <a
            href=""
            className="text-blue-600 transition duration-200 hover:underline dark:text-blue-400"
          >
            Signup
          </a>{" "}
          for free
        </p>
      </div>

      <div className="mt-8 space-y-8">
        <div className="space-y-6">
          <input
            className="w-full px-3 py-2 text-sm text-black placeholder-gray-600 bg-transparent border border-gray-300 rounded-md dark:border-gray-700 invalid:border-red-500 dark:placeholder-gray-300"
            placeholder="Your Email"
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          <input
            className="w-full px-3 py-2 text-sm text-gray-600 placeholder-gray-600 bg-transparent border border-gray-300 rounded-md dark:border-gray-700 invalid:border-red-500 dark:placeholder-gray-300"
            placeholder="Your Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          onClick={handleLogin}
          className="w-full px-3 text-white transition duration-500 bg-blue-600 rounded-md h-9 hover:bg-blue-700 active:bg-blue-800 focus:bg-blue-700"
        >
          Signin
        </button>
      </div>
    </div>
  );
};

export default FormLogin;
