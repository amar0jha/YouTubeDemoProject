import { combineReducers } from 'redux';
import videoHistoryReducer from '../reducers/videoHistoryReducer';
import subscriptionReducer from '../reducers/subscriptionReducer';
import downloadReducer from '../reducers/downloadReducer';

const rootReducer = combineReducers({
  videoHistory: videoHistoryReducer,
  subscriptions: subscriptionReducer, 
  downloads: downloadReducer,
});

export default rootReducer;
