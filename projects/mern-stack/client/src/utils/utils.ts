export const generateQueryString = (name: string, id: string) => {
	const slug = name.toLocaleUpperCase().replace(/ /g, '-');
	return `${slug}-i-${id}`;
};
