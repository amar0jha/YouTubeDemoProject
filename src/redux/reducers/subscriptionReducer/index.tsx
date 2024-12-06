import { ADD_SUBSCRIPTION, REMOVE_SUBSCRIPTION } from "../../actions/subscriptionActions";

const initialState = {
  subscriptions: [],
};

const subscriptionReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SUBSCRIPTION:
      const isAlreadySubscribed = state.subscriptions.some((video) => video.id === action.payload.id);
      if (isAlreadySubscribed) return state;
      return {
        ...state,
        subscriptions: [action.payload, ...state.subscriptions],
      };

    case REMOVE_SUBSCRIPTION:
      return {
        ...state,
        subscriptions: state.subscriptions.filter((video) => video.id !== action.payload.id),
      };

    default:
      return state;
  }
};

export default subscriptionReducer;
