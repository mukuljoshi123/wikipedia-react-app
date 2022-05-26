import { AxiosError, AxiosResponse } from "axios";
import { Logger } from "../service/logger";
import { HTTP_STATUS_CODES, serverErrors } from "./constants";
export const successHandler = (axiosResponse: AxiosResponse) => {
	//server data sent here.
	if (axiosResponse.data.responseCode === HTTP_STATUS_CODES.noContent) {
		return Promise.resolve({});
	}
	return Promise.resolve(axiosResponse.data);
};
export const errorHandler = (error: AxiosError) => {
	Logger.error(`API error:  ${JSON.stringify(error)}`);
	let errorMessage = serverErrors.SERVER_ERROR;
	if (error?.message && error?.message === "Network Error") {
		Logger.error(`Network Error. Error: ${JSON.stringify(error)}`);
		//TODO Deal no network error
	}
	if (error?.response?.status >= 500) {
		errorMessage = serverErrors.SERVER_ERROR;
		return errorMessage;
	}
	if (error?.response?.status >= 400 && error?.response?.status < 500) {
		errorMessage = serverErrors.CLIENT_ERROR;
		return errorMessage;
	}
	if (error?.response) {
		const { data } = error?.response?.data;
		if (data) {
			errorMessage = data.errorMessage;
		}
	} else {
		Logger.error(`Don't know the error. Error: ${JSON.stringify(error)}`);
	}
	return Promise.resolve(errorMessage);
};
