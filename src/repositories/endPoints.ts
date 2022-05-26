export const postEndPoints = {
	getPosts: (searchText: string, sortBy: string) =>
		`/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=${searchText}&srlimit=20&origin=*&srwhat=text&srsort=${sortBy}&withCredentials=false`,
};
