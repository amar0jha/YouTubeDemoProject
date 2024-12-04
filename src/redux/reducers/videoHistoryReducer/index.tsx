import { ADD_VIDEO_HISTORY } from "../../actions/videoHistoryActions";

const initialState = {
  history: [],
};

const videoHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_VIDEO_HISTORY:
      const videoExists = state.history.some((video) => video.id === action.payload.id);
      
      if (videoExists) {
        return state;
      }
      
      const updatedHistory = [action.payload, ...state.history];

      if (updatedHistory.length > 20) {
        updatedHistory.pop();
      }

      return {
        ...state,
        history: updatedHistory,
      };

    default:
      return state;
  }
};

export default videoHistoryReducer;
