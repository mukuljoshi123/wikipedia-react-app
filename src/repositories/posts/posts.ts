import { ApiClient } from "../../network/apiClient";
import { postEndPoints } from "../endPoints";

class PostsRepository {
	getPosts = async (body: {
		searchText: string;
		searchOn: string;
		sortBy: string;
		resultsPerPage: number;
	}): Promise<any> => {
		let data = await ApiClient.get(
			postEndPoints.getPosts(body.searchText, body.sortBy)
		);
		return data;
	};
}

const postsRepository = new PostsRepository();
export { postsRepository as PostsRepository };
