export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
  //   "BQBJK4uSaj5fUCsB5cLDyAb5hSXaxc8HcDAmVzFwAYT2ApAeW0F6wDU7lxcTbaLUQw8Rg86YS0z_hcmEF2XbdDV6anfQuoRlGzvv0ib1g_y0QHNeY8JlLj1k3oajgnV95y_7qrSlLCj9uL0_1VZQ2ux4tHJlYJk",
};

const reducer = (state, action) => {
  // Action -> type,[payload]
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
