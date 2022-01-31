import { combineReducers } from "redux";
import searchDefaultReducer from "../modules/searchDefaults";
import postDataReducer from "../modules/postsData";

const rootReducer = combineReducers({
	searchDefault: searchDefaultReducer,
	posts: postDataReducer,
});

export default rootReducer;
