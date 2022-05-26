import { ActionHelper } from "../../utils/actionHelper";

const prefix = "searchDefaults";
const SEARCH_DEFAULTS = {
	GET_SEARCH_DEFAULTS: ActionHelper.actionTypesCreator(
		prefix,
		"GET_SEARCH_DEFAULTS"
	),
};

export { SEARCH_DEFAULTS };
