const initialState = {
    downloads: [],
  };
  
  const downloadReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_DOWNLOAD':
        return {
          ...state,
          downloads: [...state.downloads, action.payload],
        };
      case 'REMOVE_DOWNLOAD':
        return {
          ...state,
          downloads: state.downloads.filter((video) => video.id !== action.payload.id),
        };
      default:
        return state;
    }
  };
  
  export default downloadReducer;
  