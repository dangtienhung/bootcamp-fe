1. nếu mà userId gửi lên === userId trong đb
   // vào products kiểm xem idProduct gửi lên có trùng với idProduct có trong mảng products
   -> nếu mà có thì tăng quantity
   -> nếu mà không có add product trong giỏ hàng
2. nếu mà userId gửi lên không có db carts
   // thêm vào sp vào

// products: []
let sum = 0;
for (let i = 0; i < products.length; i++) {
sum += products[i].quantity \* products[i].price
}
