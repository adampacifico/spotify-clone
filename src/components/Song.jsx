import React from "react";
// context API
import { useDataLayerValue } from "../contextAPI/datalayer";

const Song = ({ playlist, i }) => {
  const [{}, dispatch] = useDataLayerValue();

  const setSong = (song) => {
    dispatch({
      type: "SET_SONG",
      song: song,
    });
  };
  // converts milliseconds  to time format
  const millisToMinutesAndSeconds = (millis) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <tr
      onClick={() => setSong(playlist)}
      className="my-4 hover:bg-[#282A2F] cursor-pointer"
    >
      <td>{i + 1}</td>
      <td className="flex py-2 items-center">
        <img
          src={playlist.track.album.images[2].url}
          className="pr-4 h-[40px] object-contain"
        ></img>
        <div>
          <p className="font-bold">
            {playlist.track.name.length > 40
              ? playlist.track.name.substring(0, 40).concat("...")
              : playlist.track.name}
          </p>
          <div className="flex text-sm text-[#8E8E8E]  truncate ...">
            {playlist.track.artists.map((artist, i) => (
              <>
                {i <= 0 ? (
                  <p key={i}>{artist.name}</p>
                ) : (
                  <p key={i}>, {artist.name}</p>
                )}
              </>
            ))}
          </div>
        </div>
      </td>
      <td>
        {playlist.track.album.name.length > 25
          ? playlist.track.album.name.substring(0, 25).concat("...")
          : playlist.track.album.name}
      </td>
      <td>
        {playlist.added_at.length > 10
          ? playlist.added_at.substring(0, 10)
          : playlist.added_at}
      </td>
      {/* {title.length > 25 ? title.substring(0, 25).concat("...") : title} */}
      <td>{millisToMinutesAndSeconds(playlist.track.duration_ms)}</td>
      {/* <p>{}</p> */}
    </tr>
  );
};

export default Song;
