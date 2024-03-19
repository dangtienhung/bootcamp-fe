import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

import { RootState } from '../../app/store';
import { getOneProductExtraReducer } from '../../app/features/products/productSlice';
import { useGetOneProductQuery } from '../../app/services/products.service';
import { useParams } from 'react-router-dom';

const DetailPage = () => {
	const { id } = useParams();
	const { productInfo, isLoading, isError } = useAppSelector(
		(state: RootState) => state.product
	);
	const dispatch = useAppDispatch();

	// const {
	// 	data: product,
	// 	isLoading,
	// 	isError,
	// } = useGetOneProductQuery(Number(id as string));

	useEffect(() => {
		dispatch(getOneProductExtraReducer(Number(id)));
	}, [dispatch, id]);

	if (isLoading) return <div>Loading...</div>;
	if (!productInfo) return <div>No product found</div>;
	if (isError) return <div>Error</div>;
	return (
		<div
			style={{
				display: 'flex',
				gap: '10px',
				alignItems: 'center',
			}}
		>
			<h2>Id: {productInfo.id}</h2>
			<h2> - Name: {productInfo.name}</h2>
			<h2> - Price: {productInfo.price}</h2>
		</div>
	);
};

export default DetailPage;
