const initialState = {
  scrollArchivos: false,
  scrollPublicaciones: false,
  scrollConocenos: false
};
  
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SCROLL_NAVBAR_ARCHIVOS":
      return {
        ...state,
        scrollArchivos: action.payload,
      };
    case "SCROLL_NAVBAR_PUBLICACIONES":
      return {
        ...state,
        scrollPublicaciones: action.payload,
      };
    case "SCROLL_NAVBAR_CONOCENOS":
      return {
        ...state,
        scrollConocenos: action.payload,
      };

    default:
      return state;
  };
};


  
export default reducer;