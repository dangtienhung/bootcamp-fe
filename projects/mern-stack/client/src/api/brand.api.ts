import http from "@/configs/instance.config";
import { TBrand } from "@/types/brand.type";
import { TQueryParams, TResponseNoPagination } from "@/types/common.type";

export const brandApi = {
	getAllBrands: async (params: TQueryParams) => {
		const response = await http.get<TResponseNoPagination<TBrand>>(`/brand`, {
			params,
		});
		return response.data;
	},
};
