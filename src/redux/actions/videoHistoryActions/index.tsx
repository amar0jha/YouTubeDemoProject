export const ADD_VIDEO_HISTORY = 'ADD_VIDEO_HISTORY';

export const addVideoHistory = (video) => ({
  type: ADD_VIDEO_HISTORY,
  payload: video,
});