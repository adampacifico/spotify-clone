import React from "react";
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import { BiShuffle } from "react-icons/bi";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { IoRepeat } from "react-icons/io5";
import { RiPlayList2Line } from "react-icons/ri";
import { BsHeart } from "react-icons/bs";
import VolumeUp from "@mui/icons-material/VolumeUp";
import Slider from "@mui/material/Slider";

// context API
import { useDataLayerValue } from "../contextAPI/datalayer";

const Footer = () => {
  const [{ song }] = useDataLayerValue();

  const x = [];
  return (
    <div className="bg-[#181818] h-[90px] w-full fixed bottom-0 z-1000 flex items-center justify-between p-4">
      <div className="flex items-center text-white flex-[0.3]">
        {console.log("song", song)}
        {song ? (
          <>
            <img src={song.track.album.images[2].url} className="px-4 py"></img>
            <div className="flex flex-col pl-4 text-xs">
              <p className="font-bold">
                {song.track.name.length > 30
                  ? song.track.name.substring(0, 30).concat("...")
                  : song.track.name}
              </p>
              {song.track.artists.map((artist, i) => {
                {
                  /* {i <= 0 ? (
                      <p key={i}>{artist.name}</p>
                    ) : (
                      <p>, {artist.name}</p>
                    )} */
                }
                {
                  x.push(artist.name);
                }
              })}
              {console.log(x)}
              <div className="flex text-sm text-[#8E8E8E]">
                <p>
                  {x.join().length > 25
                    ? x.join().substring(0, 25).concat("...")
                    : x.join()}
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <img
              src="./images/174.png"
              className="h-[60px] object-contain"
              alt=""
            />
            <div className="flex flex-col pl-4 text-xs">
              <h2 className="font-bold">Title</h2>
              <span>Artist ft. Artist</span>
            </div>
          </>
        )}
        <BsHeart className="ml-8" />
      </div>
      {/* player */}

      <div>
        <div className="text-white  flex-[0.4] flex justify-between items-center max-w-lg w-[250px] text-xl">
          <BiShuffle className="hover:scale-150 cursor-pointer ease-in-out duration-300" />
          <MdSkipPrevious className="hover:scale-150 cursor-pointer ease-in-out duration-300" />
          <BsFillPlayCircleFill className="text-[2rem] hover:scale-125 cursor-pointer ease-in-out duration-300" />
          <MdSkipNext className="hover:scale-150 cursor-pointer ease-in-out duration-300" />
          <IoRepeat className="hover:scale-150 cursor-pointer ease-in-out duration-300" />
        </div>
      </div>
      <div className="text-white flex-[0.3] flex items-center justify-end">
        <RiPlayList2Line className="text-sm" />
        <div className="px-2">
          <VolumeUp fontSize="small"/>
        </div>
        <div className="w-[125px] flex items-center">
          <Slider
            defaultValue={50}
            aria-label="Default"
            valueLabelDisplay="auto"
            color="secondary"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
