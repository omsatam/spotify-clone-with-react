import "./App.css";
import React from "react";
import Login from "./Login";
import { useState, useEffect } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token, playlists }, dispatch] = useDataLayerValue();
  // const [{ user, playlists }, dispatch] = useDataLayerValue();

  // Run code based on given condition
  useEffect(() => {
    const _token = getTokenFromUrl();
    // const _token =
    // "BQBJK4uSaj5fUCsB5cLDyAb5hSXaxc8HcDAmVzFwAYT2ApAeW0F6wDU7lxcTbaLUQw8Rg86YS0z_hcmEF2XbdDV6anfQuoRlGzvv0ib1g_y0QHNeY8JlLj1k3oajgnV95y_7qrSlLCj9uL0_1VZQ2ux4tHJlYJk";
    // console.log("the raw token is ", hash);
    // const _token = hash.access_token;
    // const _token = hash;
    // console.log("the modified token is ", _token);
    window.location.hash = "";

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // setToken(_token);

      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });

        console.log("user", user);
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("playlist is ", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("15huR2jegUSV8qXEVClWWI").then((response) => {
        console.log("discover weekly is ",response)
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, []);

  console.log(token);
  return (
    <div className="App">
      {/* <h2> This is spotify clone</h2> */}
      {token ? <Player /> : <Login />}
    </div>
  );
}
export default App;
