import React, { useEffect, useState } from "react";
import Song from "./Song";
import { BsFillPlayCircleFill, BsHeart, BsThreeDots } from "react-icons/bs";
// context API
import { useDataLayerValue } from "../contextAPI/datalayer";

const Songs = () => {
  const [items, setItems] = useState(null);
  const [{ playlist_items }] = useDataLayerValue();

  useEffect(() => {
    if (playlist_items) {
      setItems(playlist_items);
    }
  }, [playlist_items]);

  return (
    <div className="bg-[rgba(0,0,0,0.1)] pl-8 text-xs">
      <div className=" flex items-center py-6">
        <BsFillPlayCircleFill className="text-[3.5rem] text-[#1ed760]" />
        <BsHeart className="mx-8 text-[1.8rem]  text-[#8E8E8E]" />
        <BsThreeDots className=" text-[1.8rem] text-[#8E8E8E]" />
      </div>
      <table className="w-full pl-[20px]">
        <thead>
          <tr className="border-b-[0.2px]">
            <th className="w-[2%] text-left py-4">#</th>
            <th className="w-[35%] text-left">TITLE</th>
            <th className="w-[20%] text-left">ALBUM</th>
            <th className="w-[20%] text-left">DATE ADDED</th>
            <th className="w-[13%] text-left">TIME</th>
          </tr>
        </thead>
        <tbody> 
          {items ? (
            items.items.map((playlist, index) => (
              <Song playlist={playlist} key={index}  i={index}/>
            ))
          ) : (
            <></>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Songs;
