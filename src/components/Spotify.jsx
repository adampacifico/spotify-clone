import React from "react";
import Sidebar from "./Sidebar";
import MainBody from "./MainBody";
import Footer from "./Footer"

const Spotify = ({ spotify }) => {
  return (
    <div className="h-screen w-full">
      <div className="flex">
        <Sidebar />
        <MainBody/>
      </div>
      <Footer />
    </div>
  );
};

export default Spotify;
