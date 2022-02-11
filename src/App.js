import Login from "./components/Login";
import Spotify from "./components/Spotify";
import React, { useEffect, useState } from "react";
import { getTokenFromResponse } from "./spotify/spotify";
import SpotifyWebApi from "spotify-web-api-js";

// context API
import { useDataLayerValue } from "./contextAPI/datalayer";

function App() {
  // const [token, setToken] = useState(null);
  // Spotify API
  const spotify = new SpotifyWebApi();

  const [{ usertoken, playlist_id }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const hash = getTokenFromResponse();

    // getting the token from the hash
    const _token = hash.access_token;

    if (_token) {
      // send user token to the Data layer
      dispatch({
        type: "SET_TOKEN",
        usertoken: _token,
      });

      // setting access token to enter spotify web api
      spotify.setAccessToken(_token);

      // getting the user details
      spotify.getMe().then((user) => {
        // send user user info to the Data layer
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      // get user playlists
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLIST",
          playlists: playlists,
        });
      });
      spotify.getMyCurrentPlayingTrack().then((song) => {
        dispatch({
          type: "SET_SONG",
          song: song,
        });
      });
    }
// 37i9dQZEVXcV7YbjpiChzj
    // errasing the token hash in the URL
    window.location.hash = "";
  }, []);

  useEffect(() => {
    // if (playlist_id) {
      spotify.getPlaylistTracks(playlist_id).then((items) => {
        dispatch({
          type: "SET_PLAYLIST_ITEMS",
          playlist_items: items
        })
      })
      spotify.getPlaylist(playlist_id).then((item) => {
        dispatch({
          type: "SET_PLAYLIST_DETAILS",
          playlist_details: item
        })
      })
    // }
  }, [playlist_id]);

  return (
    <div className="h-screen w-full">
      {usertoken ? <Spotify spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
