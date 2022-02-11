import React from "react";
// context API
import { useDataLayerValue } from "../contextAPI/datalayer";

const SidebarMenus = ({ title, Icon, id }) => {
  const [{}, dispatch] = useDataLayerValue();
  const selectedPlaylist = () => {
    dispatch({
      type: "SET_PLAYLIST_ID",
      playlist_id: id,
    })
  };
  return (
    <div
      onClick={selectedPlaylist}
      className="flex h-10 items-center  transition-colors duration-200  ease-in hover:text-white cursor-pointer text-sm tracking-wide"
    >
      {Icon && <Icon className="text-2xl font-thin" />}
      {Icon ? (
        <h4 className="ml-[15px] font-semibold">{title}</h4>
      ) : (
        <p className="text-xs h-auto py-2">
          {title.length > 25 ? title.substring(0, 25).concat("...") : title}
        </p>
      )}
    </div>
  );
};

export default SidebarMenus;
