import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import { useDataLayerValue } from "../contextAPI/datalayer";

const Header = () => {
  const [{ user }, dispatch] = useDataLayerValue();
  const [logout, setLogout] = useState(false);
  const Logout = () => {
    dispatch({
      type: "SET_TOKEN",
      usertoken: "",
    });
  };

  return (
    <div className=" fixed right-[70px] top-[15px] left-[300px] h-[54px] bg-transparent flex justify-between items-start">
      {/* left */}
      <div className="flex justify-between items-center w-[110px]">
        <div className="rounded-[50%] p-[5px] bg-[#0F151F] text-white">
          <IoIosArrowBack className="text-white text-[1.2rem]" />
        </div>
        <div className="rounded-[50%] p-[5px] bg-[#0F151F] text-white">
          <IoIosArrowForward className="text-white text-[1.2rem]" />
        </div>
      </div>
      {/* right */}
      <div
        className="flex bg-black rounded-[1.2rem] p-1 items-center justify-start flex-col cursor-pointer"
        onClick={() => setLogout(!logout)}
      >
        <div className="flex items-center">
          {user?.images[0] ? (
            <img
              className="h-[2rem] object-contain rounded-[2rem]"
              src={user.images[0].url}
            ></img>
          ) : (
            <FaUserCircle className="text-[2rem]" />
          )}
          <h3 className="mx-4">{user?.display_name}</h3>
          <AiOutlineCaretDown />
        </div>
        {logout ? (
          <div className="p-2" onClick={Logout}>
            Log out
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
