import React from "react";
import { accessUrl } from "../spotify/spotify";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col px-[20px] bg-black">
      <img src="./images/spotify-logo.png" className="w-[450px] h-auto"></img>
      <a
        href={accessUrl}
        className="bg-[#1ed760] text-white mt-32 w-52 p-4 rounded-[99px] text-center cursor-pointer no-underline"
      >
        LOGIN WITH SPOTIFY
      </a>
    </div>
  );
};

export default Login;
