var express = require('express');
// import express from 'express'
var mockData = require('./common/mock-data');

var app = express();
var port = 8000;

// middleware
app.use(express.json());

// lấy ra danh sách sản phẩm
app.get('/products', function (request, response) {
	return response.send(mockData);
});

// app.post('/products', function (request, response) {
// 	return response.send('You have created a product');
// });

// lấy ra 1 sản phẩm
app.get('/products/:id', function (request, response) {
	var productId = request.params.id;
	console.log('🚀 ~ request.params:', request.params);
	console.log('🚀 ~ productId:', productId);

	var product = mockData.filter(function (item) {
		return item.id == productId;
	});

	console.log('🚀 ~ product ~ product:', product);

	if (product.length === 0) {
		return response.send({
			message: 'Product not found!',
		});
	}

	return response.send({
		data: product,
	});
});

// tạo mới 1 sản phẩm
app.post('/products', function (request, response) {
	var body = request.body;

	body.id = mockData.length + 1;

	mockData.push(body);

	return response.send({
		message: 'You have created a product',
		data: mockData,
	});
});

// cập nhật sản phẩm
app.put('/products/:id', function (request, response) {
	var productId = request.params.id;
	var body = request.body;

	var product = mockData.find(function (item) {
		return item.id == productId;
	});

	if (!product) {
		return response.send({
			message: 'Product not found!',
		});
	}

	product.name = body.name;
	product.price = body.price;

	var newMockData = mockData.map(function (item) {
		if (item.id == productId) {
			return product;
		}
		return item;
	});

	return response.send({
		message: 'You have updated a product',
		dataInfo: product,
		dataList: newMockData,
	});
});

// xoá sản phẩm
app.delete('/products/:id', function (request, response) {
	var productId = request.params.id;

	// tìm xem sản phẩm có tồn tại không
	var isExits = mockData.find(function (item) {
		return item.id == productId;
	});

	if (!isExits) {
		return response.send({
			message: 'Product not found!',
		});
	}

	// xoá sản phẩm
	var newMockData = mockData.filter(function (item) {
		return item.id != productId;
	});

	return response.send({
		message: 'You have deleted a product',
		data: newMockData,
	});
});

app.listen(port, function () {
	console.log('Server is running on port ' + port);
});

// client -> server -> database

// server là 1 chương trình chạy trên máy tính, nó chạy 1 cổng nào đó, và chờ đợi request từ client -> xử lí logic
// database lưu trữ dữ liệu, có thể lưu trữ trên máy tính, hoặc trên cloud ->
