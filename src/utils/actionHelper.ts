export interface IBaseActionTypes {
	LOADING: string;
	SUCCESS: string;
	ERROR: string;
	REQUEST: string;
}

const actionTypesCreator = (
	prefix: string,
	actionType: string
): IBaseActionTypes => {
	const types = ["LOADING", "SUCCESS", "ERROR", "REQUEST"];
	let data = {
		LOADING: "",
		SUCCESS: "",
		ERROR: "",
		REQUEST: "",
	};
	types.forEach((type: string) => {
		let completeActionType = `${prefix}/${actionType}_${type}`;
		Object.assign(data, {
			[type]: completeActionType,
		});
	});
	return data;
};
export const ActionHelper = { actionTypesCreator };
