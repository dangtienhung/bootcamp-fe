// generic type
export type TResponse<T> = {
	message: string;
	success: boolean;
	docs: T[];
	totalDocs: number;
	limit: number;
	totalPages: number;
	page: number;
	pagingCounter: number;
	hasPrevPage: number | boolean;
	hasNextPage: number | boolean;
	prevPage: number | null;
	nextPage: number | null;
};

export type TResponseNoPagination<Data> = {
	message: string;
	success: boolean;
	data: Data[];
};

export type TResponseDetail<Data> = {
	message: string;
	success: boolean;
	data: Data;
};
