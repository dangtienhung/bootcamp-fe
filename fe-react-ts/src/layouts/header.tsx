import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className="w-full py-10 px-10 bg-blue-200 flex items-center gap-10">
			<Link to="/" className="cursor-pointer">
				Danh sách sản phẩm
			</Link>
			<Link to="/add-product" className="cursor-pointer">
				Thêm sản phẩm
			</Link>
			<Link to="/edit-product" className="cursor-pointer">
				Sửa sản phẩm
			</Link>
			<Link to="/count-number" className="cursor-pointer">
				Đếm số
			</Link>
		</div>
	);
};

export default Header;
