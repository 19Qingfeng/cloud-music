import { combineReducers } from 'redux-immutable';
import counter from './reducers/couter'

export default combineReducers({
  // 之后开发具体功能模块的时候添加 reducer
  counter
});