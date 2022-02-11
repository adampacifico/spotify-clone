import React from "react";
import SidebarMenus from "./SidebarMenus";
import { VscHome } from "react-icons/vsc";
import { RiSearchLine } from "react-icons/ri";
import { BiLibrary } from "react-icons/bi";

// context API
import { useDataLayerValue } from "../contextAPI/datalayer";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  return (
    <div className="flex-[0.13] bg-black h-screen text-[#B3B3B3] p-[25px]">
      <div className="w-full mr-auto mb-[18px]">
        <img
          src="./images/spotify-logo.png"
          className="h-10 object-contain"
        ></img>
      </div>
      <SidebarMenus Icon={VscHome} title="Home" />
      <SidebarMenus Icon={RiSearchLine} title="Search" />
      <SidebarMenus Icon={BiLibrary} title="Your library" />
      <h4 className="mt-8 text-sm font-semibold text-white pb-[8px]">
        Playlist
      </h4>
      <hr className="h-[1px] w-[100%] mx-auto opacity-30"></hr>
      {/* {console.log(p)} */}
      {playlists?.items?.map((playlist, i) => (
        //   {console.log(playlist.name)}
        <div key={i}>
          {/* {console.log(playlist.tracks)} */}
          <SidebarMenus title={playlist.name} id = {playlist.id}/>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
