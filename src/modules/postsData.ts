import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPostData {
	posts: IPostsList[];
	isLoading: boolean;
	hasErrors: boolean;
}

export interface IPostsList {
	title: string;
	description: string;
	id: number;
}

const postsDataReducer = createSlice({
	name: "postsData",
	initialState: {
		posts: [],
		isLoading: false,
		hasErrors: false,
	} as IPostData,

	reducers: {
		getPostsFetch(state) {
			state.isLoading = true;
		},
		getPostsSuccess(state, action: PayloadAction<IPostsList[]>) {
			state.posts = action.payload;
			state.isLoading = false;
		},
		getPostsError(state) {
			state.isLoading = false;
			state.hasErrors = true;
		},
	},
});

export const postDataActions = postsDataReducer.actions;

export default postsDataReducer.reducer;
