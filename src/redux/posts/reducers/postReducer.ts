import { POST } from "../actions/actionTypes";

export interface IPostState {
	posts: IPostsList[];
	isLoading: boolean;
	error: boolean;
}

export interface IPostsList {
	title: string;
	description: string;
	id: number;
}



export const postsInitialState: IPostState = {
	posts: [],
	isLoading: false,
	error: false,
};

const postsDataReducer = (
	state = postsInitialState,
	action: { payload: any; type: string }
): IPostState => {
	switch (action.type) {
		case POST.GET_POSTS.LOADING:
			return { ...state, isLoading: action.payload, error: false };
		case POST.GET_POSTS.SUCCESS:
			return { ...state, posts: action.payload, isLoading: false };
		case POST.GET_POSTS.ERROR:
			return { ...state, isLoading: false, error: true };
		default:
			return state;
	}
};

export default postsDataReducer;
