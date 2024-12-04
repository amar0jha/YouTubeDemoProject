import { combineReducers } from 'redux';
import videoHistoryReducer from '../reducers/videoHistoryReducer';

const rootReducer = combineReducers({
  videoHistory: videoHistoryReducer,
});

export default rootReducer;
