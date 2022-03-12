import { combineReducers } from "redux";
import searchDefaultReducer from "../modules/searchDefaults";
import postsDataReducer from "./posts/reducers/postReducer";
import searchDefaultReducerNew from "./searchDefaults/reducer";

const rootReducer = combineReducers({
	search: searchDefaultReducer,
	posts: postsDataReducer,
	searchDefault: searchDefaultReducerNew,
});

export default rootReducer;
