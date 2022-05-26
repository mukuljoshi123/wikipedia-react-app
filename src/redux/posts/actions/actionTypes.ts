import { ActionHelper } from "../../../utils/actionHelper";

const prefix = "post";
const POST = {
	GET_POSTS: ActionHelper.actionTypesCreator(prefix, "GET_POSTS"),
};

export { POST };
