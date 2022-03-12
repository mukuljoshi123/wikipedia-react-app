import { JsonObject, JsonProperty } from "json2typescript";

// @JsonObject("Post")
// export class PostData {
// 	@JsonProperty("title", String)
// 	title: string = "";
// 	@JsonProperty("snippet", String)
// 	snippet: string = "";
// 	@JsonProperty("pageid", Number)
// 	pageid: number = 0;
// }

// @JsonObject("Search")
// export class Search {
// 	@JsonProperty("createdAt", String)
// 	createdAt: string = "";
// }

// @JsonObject("Query")
// export class Query {
// 	@JsonProperty("search", [Search])
// 	search: Array<PostData> = [];
// }

// @JsonObject("Response")
// export class Response {
// 	@JsonProperty("query", Query)
// 	query: Object = {};
// }

// @JsonObject("Post")
// export class Post {
// 	@JsonProperty("response", Response)
// 	response: Object = {};
// }


export class GetPostsResponse {
	batchcomplete: string
	continue: Continue
	query: Query
  }
  
  export class Continue {
	sroffset: number
	continue: string
  }
  
  export class Query {
	searchinfo: Searchinfo
	search: Search[]
  }
  
  export class Searchinfo {
	totalhits: number
  }
  
  export class Search {
	ns: number
	title: string
	pageid: number
	size: number
	wordcount: number
	snippet: string
	timestamp: string
  }
  

// {
//     "batchcomplete": "",
//     "continue": {
//         "sroffset": 2,
//         "continue": "-||"
//     },
//     "query": {
//         "searchinfo": {
//             "totalhits": 34121
//         },
//         "search": [
//             {
//                 "ns": 0,
//                 "title": "Barack Obama",
//                 "pageid": 534366,
//                 "size": 344881,
//                 "wordcount": 28956,
//                 "snippet": "Barack Hussein <span class=\"searchmatch\">Obama</span> II (/bəˈrɑːk huːˈseɪn oʊˈbɑːmə/ (listen) bə-RAHK hoo-SAYN oh-BAH-mə; born August 4, 1961) is an American politician and lawyer who",
//                 "timestamp": "2022-02-09T08:05:42Z"
//             },
//             {
//                 "ns": 0,
//                 "title": "Michelle Obama",
//                 "pageid": 2204744,
//                 "size": 150154,
//                 "wordcount": 13978,
//                 "snippet": "Michelle LaVaughn Robinson <span class=\"searchmatch\">Obama</span> (born January 17, 1964) is an American attorney and author who served as the first lady of the United States from 2009",
//                 "timestamp": "2022-02-05T16:10:28Z"
//             }
//         ]
//     }
// }
