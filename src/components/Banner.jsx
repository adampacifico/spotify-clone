import React, { useState, useEffect } from "react";
import { FaRegDotCircle } from "react-icons/fa";

// context API
import { useDataLayerValue } from "../contextAPI/datalayer";

const Banner = () => {
  const [{ playlist_details }] = useDataLayerValue();
  // const [details, setDetails] = useState();

  // useEffect(() => {
  //   setDetails(details);
  // }, [playlist_details]);

  return (
    <div className="h-[40vh] flex-none flex justify-start items-end ml-8 mb-8">
      {console.log("details", playlist_details)}
      {playlist_details ? 
      <>
        <img
          src={playlist_details.images[0].url}
          className="w-[240px] object-contain"
        ></img>
        <div className="ml-6">
        <h4 className="uppercase text-sm ">{playlist_details.type}</h4>
        <h1
          className={`font-bold tracking-tighter ${
            playlist_details.name.length >= 16 && playlist_details.name.length <= 25
              ? "text-[3rem]"
              : "text-[5rem]"
          } ${
            playlist_details.name.length > 25
              ? "text-[2.5rem]"
              : ""
          }`}
        >
          {playlist_details.name}
        </h1>
        <p>{playlist_details.description}</p>
        <div>
          <span className="text-sm font-bold ">
            {playlist_details.owner.display_name}
          </span>
          <span className="text-sm font-bold mx-2">•</span>
          <span className="text-sm ">
            {playlist_details.tracks.total} songs
          </span>
        </div>
      </div>
      </>
      : (
        <div className="h-[200px] w-[200px] bg-[rgb(54,69,79)] flex items-center justify-center  shadow-2xl shadow-black-500">
          <FaRegDotCircle className="h-[100px] w-[100px]" />
        </div>
      )}
      
    </div>
  );
};

export default Banner;
