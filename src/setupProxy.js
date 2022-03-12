// const { proxy } = require("http-proxy-middleware");

// module.exports = function (app) {
// 	app.use(
// 		proxy("/w/api.php", {
// 			target: "https://en.wikipedia.org",
// 			chaneOrigin: true,
// 		})
// 	);
// };

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		createProxyMiddleware(
			"?origin=*&action=query&format=json&list=search&utf8=1&srsearch=${searchText}&srlimit=20&srwhat=text&srsort=${sortBy}",
			{
				target: "https://en.wikipedia.org/w/api.php",
			}
		)
	);
};
