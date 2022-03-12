export const postEndPoints = {
	getPosts: (searchText: string, sortBy: string) =>
		`/w/api.php?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${searchText}&srlimit=20&srwhat=text&srsort=${sortBy}`,
};
