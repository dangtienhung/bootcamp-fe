const Header = () => {
	return (
		<div className="w-full py-10 px-10 bg-blue-200 flex items-center gap-10">
			<a href="/" className="cursor-pointer">
				Danh sách sản phẩm
			</a>
			<a href="/add-product" className="cursor-pointer">
				Thêm sản phẩm
			</a>
			<a href="/edit-product" className="cursor-pointer">
				Sửa sản phẩm
			</a>
		</div>
	);
};

export default Header;
