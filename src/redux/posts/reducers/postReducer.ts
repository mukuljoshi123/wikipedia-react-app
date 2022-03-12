import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { POST } from "../actions/actionTypes";

export interface IPostState {
	posts: IPostsList[];
	loading: boolean;
	error: boolean;
}

export interface IPostsList {
	title: string;
	description: string;
	id: number;
}

export const postsInitialState: IPostState = {
	posts: [],
	loading: false,
	error: false,
};

const postsDataReducer = (
	state = postsInitialState,
	action: { payload: any; type: string }
): IPostState => {
	switch (action.type) {
		case POST.GET_POSTS.LOADING:
			console.log("reducer called");
			return { ...state, loading: true, error: false };
		case POST.GET_POSTS.SUCCESS:
			return { ...state, posts: action.payload };
		case POST.GET_POSTS.ERROR:
			return { ...state, loading: false, error: true };
		default:
			return state;
	}
};

export default postsDataReducer;
