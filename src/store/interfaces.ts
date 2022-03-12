export interface IFluxStandardAction<
	Payload = undefined,
	Meta = undefined,
	Error = string
> {
	type: string;
	payload?: Payload;
	error?: Error;
	meta?: Meta;
	visible?: boolean;
}

export interface IBaseActionTypes {
	LOADING: string;
	SUCCESS: string;
	ERROR: string;
}
