const keysToIgnore = ["children"];

export const getClassName = (props) => {
	const propKeys = Object.keys(props);
	return propKeys.reduce((className, key) => {
		if (keysToIgnore.includes(key)) {
			return className;
		} else if (!props[key]) {
			return className;
		}
		return `${className} ${props[key]}`;
	}, "");
};
