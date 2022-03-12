import { AppDispatch } from "../../redux/store";
import { postDataActions } from "../postsData";

export interface IFetchPostDataArgs {
	searchText: string;
	searchOn: string;
	sortBy: string;
	resultsPerPage: number;
}

export const fetchPostsData = (searchData: IFetchPostDataArgs) => {
	return async (dispatch: AppDispatch) => {
		console.log(searchData);
		dispatch(postDataActions.getPostsFetch());
		const url: string = `https://en.wikipedia.org/w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${searchData.searchText}&srlimit=20&srwhat=text&srsort=${searchData.sortBy}`;
		const getPostsData = async () => {
			const response = await fetch(url, {
				method: "GET",
			});
			if (response.status != 200) {
				throw new Error("Error while fetching posts!");
			}
			return await response.json();
		};

		try {
			const responseData = await getPostsData();
			const postList: any[] = responseData.query.search;
			const postsData = postList.map((post) => {
				return { id: post.id, title: post.title, description: post.snippet };
			});
			dispatch(postDataActions.getPostsSuccess(postsData));
		} catch (Error) {
			dispatch(postDataActions.getPostsError());
		}
	};
};
