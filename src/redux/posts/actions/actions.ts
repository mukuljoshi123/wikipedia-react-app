import { IFluxStandardAction } from "../../../store/interfaces";
import { IPostsList } from "../reducers/postReducer";
import { POST } from "./actionTypes";

const getPost = (data: {
	searchText: string;
	searchOn: string;
	sortBy: string;
	resultsPerPage: number;
}) => {
	return {
		type: POST.GET_POSTS.REQUEST,
		payload: data,
	};
};

const getPostLoading = (data: boolean): IFluxStandardAction<boolean> => {
	return {
		type: POST.GET_POSTS.LOADING,
		payload: data,
	};
};

const getPostSuccess = (
	data: IPostsList[]
): IFluxStandardAction<IPostsList[]> => {
	return {
		type: POST.GET_POSTS.SUCCESS,
		payload: data,
	};
};

const getPostError = (error: Error): IFluxStandardAction<Error> => {
	return {
		type: POST.GET_POSTS.ERROR,
		payload: error,
	};
};

export const PostActions = {
	getPost,
	getPostLoading,
	getPostSuccess,
	getPostError,
};
