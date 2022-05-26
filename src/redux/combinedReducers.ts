import { combineReducers } from "redux";
import postsDataReducer from "./posts/reducers/postReducer";
import searchDefaultReducerNew from "./searchDefaults/reducer";

const rootReducer = combineReducers({
	posts: postsDataReducer,
	searchDefault: searchDefaultReducerNew,
});

export default rootReducer;
