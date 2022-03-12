import { call, put, takeLatest } from "redux-saga/effects";
import { GetPostsResponse } from "../../../models/getPosts";
import { PostsRepository } from "../../../repositories/posts/posts";
import { IFluxStandardAction } from "../../../store/interfaces";
import { PostActions } from "../actions/actions";
import { POST } from "../actions/actionTypes";

function* getPostWorkerSaga(
	value: IFluxStandardAction<{
		searchText: string;
		searchOn: string;
		sortBy: string;
		resultsPerPage: number;
	}>
) {
	try {
		yield put(PostActions.getPostLoading(true));
		// console.log("apic call");
		// const { payload } = value;
		// const response: GetPostsResponse = yield call(
		// 	PostsRepository.getPosts,
		// 	payload
		// );
		// console.log("data" + response);
		// const postList: any[] = response.query.search;
		// const postsData = postList.map((post) => {
		// 	return { id: post.id, title: post.title, description: post.snippet };
		// });

		yield put(
			PostActions.getPostSuccess([
				{ id: 234, title: "DUMMY TITLE", description: "this is a dummy data" },
			])
		);
	} catch (error: any) {
		yield put(PostActions.getPostError(error));
	}
}

export default function* getPostWatcherSaga() {
	yield takeLatest(POST.GET_POSTS.REQUEST, getPostWorkerSaga);
}
