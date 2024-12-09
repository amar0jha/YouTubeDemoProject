export const addDownload = (video) => ({
    type: 'ADD_DOWNLOAD',
    payload: video,
  });
  
  export const removeDownload = (video) => ({
    type: 'REMOVE_DOWNLOAD',
    payload: video,
  });
  