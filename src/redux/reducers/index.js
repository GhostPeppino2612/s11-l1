const initialState = {
  favorites: [],
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      const isFavorite = state.favorites.some((fav) => fav._id === action.payload._id);
      return {
        ...state,
        favorites: isFavorite ? state.favorites : [...state.favorites, action.payload],
      };

    case "REMOVE_FAVORITE":
      return {
        ...state,
        favorites: state.favorites.filter((company) => company !== action.payload),
      };

    default:
      return state;
  }
};

export default mainReducer;
