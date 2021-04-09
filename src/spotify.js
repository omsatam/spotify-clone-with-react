// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "http://localhost:3000/";

const clientId = "7d9245acd3524eb395036c377053c485";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-rated",
  "user-modify-playback-state",
];

export const getTokenFromUrl = () => {
  return window.location.hash.substring(0).split("&")[0].split("=")[1];
  // .reduce((initial, item) => {
  //   let parts = item.split("=");

  //   return parts[0];
  // }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scopes=${scopes.join(
  "%20"
)}&response_type=token&show_dialogue=true`;
