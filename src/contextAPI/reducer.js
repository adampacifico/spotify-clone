export const initialState = {
  user: null,
  playlists: [],
  // usertoken: "BQCsoyGWRfkCf6davp_1Hx11PAPtNJa0Gm2qmML0yJ1mxqzzLTZMIr8DZIjOpCJsBvbjh6G3utGT_qYxmIdfFWpfvjZSIS8povS8G6rI_OuoY9Z2bqpjURaWhC7Zyi0yJcnFZFJ9lWE03LbH_LM2pYEDXeB-P_fZUt6wJyJrerHQvah-",
  usertoken: null,
  song: null,
  item: null,
  playlist_id: '37i9dQZEVXcV7YbjpiChzj',
  playlist_items: null,
  playlist_details: null,
};

const reducer = (state, action) => {
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
        usertoken: action.usertoken,
      };
    case "SET_PLAYLIST":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_PLAYLIST_ID":
      return {
        ...state,
        playlist_id: action.playlist_id,
      };
    case "SET_PLAYLIST_ITEMS":
      return {
        ...state,
        playlist_items: action.playlist_items,
      };
    case "SET_SONG":
      return {
        ...state,
        song: action.song,
      };
    case "SET_PLAYLIST_DETAILS":
      return {
        ...state,
        playlist_details: action.playlist_details,
      };
    default:
      return state;
  }
};

export default reducer;
