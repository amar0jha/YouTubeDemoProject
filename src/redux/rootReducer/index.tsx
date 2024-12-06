import { combineReducers } from 'redux';
import videoHistoryReducer from '../reducers/videoHistoryReducer';
import subscriptionReducer from '../reducers/subscriptionReducer';

const rootReducer = combineReducers({
  videoHistory: videoHistoryReducer,
  subscriptions: subscriptionReducer, 
});

export default rootReducer;
