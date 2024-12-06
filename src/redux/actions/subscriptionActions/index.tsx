export const ADD_SUBSCRIPTION = 'ADD_SUBSCRIPTION';
export const REMOVE_SUBSCRIPTION = 'REMOVE_SUBSCRIPTION';

export const addSubscription = (video) => ({
  type: ADD_SUBSCRIPTION,
  payload: video,
});

export const removeSubscription = (video) => ({
  type: REMOVE_SUBSCRIPTION,
  payload: video,
});
