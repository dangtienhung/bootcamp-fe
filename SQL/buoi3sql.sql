CREATE DATABASE QUAN_LY_SHOP_BUOI3


USE QUAN_LY_SHOP_BUOI3

--> TẠO 1 BẢNG KHÁCH HÀNG GỒM 
create table khach_hang (
	ma_khach_hang int not null identity,
	ho_ten nvarchar(50) not null,
	phone varchar(12) not null unique,
	gioi_tinh bit not null,
	dia_chi ntext not null,

	constraint pk_khach_hang primary key (ma_khach_hang)
)

create table don_hang (
	ma_don_hang int not null identity,
	ma_khach_hang int not null,
	trang_thai nvarchar(20) not null,

	constraint pk_ma_don_hang primary key(ma_don_hang),
	constraint fk_don_hang_khach_hang foreign key (ma_khach_hang) references khach_hang(ma_khach_hang),
	constraint ck_trang_thai check (trang_thai in ('pending', 'confirm', 'delivery', 'done', 'cancelled'))
)

drop table don_hang


// pending: khi mà người dùng đặt hàng thành công 
// confirm: shop bán hàng đã nhận được đơn hàng của chúng ta
// delivery: vận chuyển đơn hàng
// done: thành công
// canceled: thất bại 

--- thêm dữ liệu
insert into khach_hang (ho_ten, phone, gioi_tinh, dia_chi)
values 
	(N'Nguyễn Văn A', '0987654321', 1, N'123 Đường ABC, Quận XYZ, Thành phố HCM'),
(N'Trần Thị B', '0123456789', 0, N'456 Đường DEF, Quận UVW, Thành phố Hanoi'),
(N'Phạm Văn C', '0369874123', 1, N'789 Đường GHI, Quận LMN, Thành phố Đà Nẵng'),
(N'Hoàng Thị D', '0998877665', 0, N'012 Đường JKL, Quận OPQ, Thành phố HCM'),
(N'Lê Văn E', '0901234567', 1, N'345 Đường RST, Quận WXY, Thành phố Hanoi'),
(N'Trần Văn F', '0888765432', 1, N'678 Đường UVW, Quận XYZ, Thành phố HCM'),
(N'Nguyễn Thị G', '0934567890', 0, N'901 Đường YZA, Quận BCD, Thành phố Hanoi'),
(N'Lê Thị H', '0976543210', 0, N'234 Đường EFG, Quận CDE, Thành phố HCM'),
(N'Vũ Văn I', '0965432109', 1, N'567 Đường HIJ, Quận FGH, Thành phố Hanoi'),
(N'Trần Văn K', '0943210987', 1, N'890 Đường KLM, Quận GHI, Thành phố Đà Nẵng');



delete from khach_hang


insert into don_hang (ma_khach_hang, trang_thai) 
values
(11, 'pending'),
(12, 'confirm'),
(13, 'delivery'),
(14, 'done'),
(15, 'cancelled'),
(16, 'pending'),
(17, 'confirm'),
(18, 'delivery'),
(19, 'done'),
(20, 'done');

select * from don_hang

-- hiển thị ra họ tên, sdt của tất cả khách hàng
select ho_ten, phone from khach_hang

-- thêm cột ngày sinh vào trong db khach hàng
alter table khach_hang
add ngay_sinh date

update khach_hang
set ngay_sinh = '2001-04-12'
where ma_khach_hang = 15

select * from khach_hang

-- lấy ra những khách hàng sinh tháng 4
select * from khach_hang
where MONTH(ngay_sinh) = 4

-- lấy ra 3 khách hàng mới nhất
select top 3 * from khach_hang

-- lấy ra những khách hàng có tuổi lớn hơn 18
select * from khach_hang
select * from khach_hang
where YEAR(GETDATE()) - YEAR(ngay_sinh) <= 18
select * from khach_hang
where YEAR(GETDATE()) - YEAR(ngay_sinh) > 18

-- lấy ra những khách hàng nào chưa chữ T
select * from khach_hang
select * from khach_hang
where ho_ten like '%T%'

insert into khach_hang (ho_ten, phone, gioi_tinh, dia_chi, ngay_sinh)
values 
	(N'Nguyễn Văn ahihi', '0987654351', 1, N'123 Đường ABC, Quận XYZ, Thành phố HCM', '2029-01-12')

-- check ngày sinh bé hơn ngày hiện tại
alter table khach_hang
add constraint ck_check_ngay_sinh_ahii check(ngay_sinh < GETDATE())

-- check chỉ được nhập với giới tính là nam = 1 và tên là Hung
alter table khach_hang
add constraint ck_gioi_tinh_ten_hung check ((gioi_tinh = 0 and ho_ten = 'Hung'))
