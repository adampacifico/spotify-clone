import React from "react";
import Header from "./Header";
import Songs  from "./Songs"
import Banner from "./Banner"

const MainBody = ({ spotify }) => {
  return (
    <div className="bg-gradient-to-t from-[#181818] max-h-[calc(100vh-90px)] overflow-y-scroll py-2 to-[#1A2739] flex-[0.87] text-white flex flex-col relative w-[auto]">
      <Header spotify={spotify} />
      <Banner />
      <Songs />
    </div>
  );
};

export default MainBody;
