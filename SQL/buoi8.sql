-- Để quản lý Thực tập nghề nghiệp của sinh viên, người ta xây dựng một cơ sở dữ liệu có tên là 
-- ThucTap gồm các sơ đồ quan hệ sau:
create database ThucTap

use ThucTap



-- Khoa(makhoa char(10), tenkhoa char(30)
create table Khoa (
	ma_khoa int not null identity,
	ten_khoa nvarchar(30) not null

	constraint pk_khoa primary key (ma_khoa)
)
drop table Khoa

-- GiangVien(magv int, hotengv char(30), luong decimal(5,2), makhoa char(10))
create table GiangVien (
	ma_gv int not null identity,
	tengv nvarchar(50) not null,
	luong float,
	ma_khoa int not null,

	constraint pk_ma_khoa_ma_gv foreign key (ma_khoa) references Khoa(ma_khoa),
	constraint pk_gv primary key (ma_gv)
)

-- SinhVien(masv int, hotensv char(30), makhoa char(10), namsinh int, quequan char(30))
create table SinhVien (
	ma_sinh_vien int not null identity,
	hotensv nvarchar(50) not null,
	namsinh int,
	quequan nvarchar(150),
	ma_khoa int,

	constraint pk_SinhVien_Khoa foreign key (ma_khoa) references Khoa(ma_khoa),
	constraint pk_sinh_vien primary key (ma_sinh_vien)
)

drop table SinhVien

-- DeTai(madt char(10), tendt char(30), kinhphi int, NoiThucTap char(30))
create table Detai (
	ma_de_tai int not null identity,
	ten_de_tai nvarchar(200) not null,
	kinh_phi float default 0,
	noi_thuc_tap nvarchar(150) not null,

	constraint pk_de_tai primary key (ma_de_tai)
)

drop table Detai

-- HuongDan(masv int, madt char(10), magv int, ketqua decimal(5,2))
create table HuongDan (
	ma_huong_dan int not null identity,
	ma_de_tai int not null,
	ma_gv_huong_dan int not null,
	ma_sv_lam_do_an int not null,
	ket_ket nvarchar(200),
	constraint pk_SinhVien_HuongDan foreign key (ma_sv_lam_do_an) references SinhVien(ma_sinh_vien),
	constraint pk_GiangVien_HuongDan foreign key (ma_gv_huong_dan) references GiangVien(ma_gv),
	constraint pk_Detai_HuongDan foreign key (ma_de_tai) references Detai(ma_de_tai),
)




INSERT INTO Khoa (ten_khoa)
VALUES 
	(N'Địa lý và QLTT'),
    (N'Toán'),
    (N'Công nghệ sinh học'),
	(N'Vật lý'),
(N'Hóa học'),
(N'Ngữ văn'),
(N'Lịch sử'),
(N'Sinh học'),
(N'Khoa học máy tính'),
(N'Kinh tế'),
(N'Quản trị kinh doanh'),
(N'Ngoại ngữ'),
(N'Giáo dục'),
(N'Tâm lý học'),
(N'Y học');

INSERT INTO GiangVien (tengv, luong, ma_khoa)
VALUES 
(N'Nguyễn Văn A', 5000000, 1),
(N'Trần Thị B', 5500000, 1),
(N'Phạm Văn C', 6000000, 2),
(N'Lê Thị D', 5200000, 2),
(N'Hoàng Văn E', 5800000, 3),
(N'Nguyễn Thị F', 5300000, 3),
(N'Trần Văn G', 6200000, 4),
(N'Lê Thị H', 5400000, 4),
(N'Phạm Văn I', 6100000, 5),
(N'Nguyễn Thị K', 5700000, 5),
(N'Trần Văn L', 5900000, 6),
(N'Lê Thị M', 5600000, 6),
(N'Hoàng Văn N', 6300000, 7),
(N'Nguyễn Thị O', 6400000, 7),
(N'Trần Văn P', 6600000, 8),
(N'Tran son', 6700000, 8);


-- Tạo bảng SinhVien
CREATE TABLE SinhVien (
    ma_sinh_vien int NOT NULL IDENTITY,
    hotensv nvarchar(50) NOT NULL,
    namsinh int,
    quequan nvarchar(150),
    ma_khoa int,
    CONSTRAINT pk_sinh_vien PRIMARY KEY (ma_sinh_vien),
    CONSTRAINT fk_ma_khoa_sinhvien FOREIGN KEY (ma_khoa) REFERENCES Khoa(ma_khoa)
);

-- Chèn dữ liệu vào bảng SinhVien
INSERT INTO SinhVien (hotensv, namsinh, quequan, ma_khoa)
VALUES 
(N'Nguyễn Văn Sinh', 2000, N'Hà Nội', 1),
(N'Trần Thị Mai', 2001, N'Hải Phòng', 1),
(N'Phạm Văn Hoa', 1999, N'Đà Nẵng', 2),
(N'Lê Thị Lan', 2000, N'Quảng Ninh', 2),
(N'Hoàng Văn Nam', 2002, N'Nghệ An', 3),
(N'Nguyễn Thị Huệ', 1998, N'Hà Tĩnh', 3),
(N'Trần Văn Đức', 2001, N'Bình Định', 4),
(N'Lê Thị Hương', 2000, N'Bình Thuận', 4),
(N'Phạm Văn Anh', 1999, N'Gia Lai', 5),
(N'Nguyễn Thị Ngọc', 2001, N'Đắk Lắk', 5),
(N'Trần Văn Tuấn', 2002, N'Bình Dương', 6),
(N'Lê Thị Thủy', 1998, N'Đồng Nai', 6),
(N'Hoàng Văn Long', 2000, N'Cần Thơ', 7),
(N'Nguyễn Thị Hà', 2001, N'Hồ Chí Minh', 7),
(N'Trần Văn Hùng', 1999, N'Kiên Giang', 8);
select * from GiangVien
delete from GiangVien

INSERT INTO Detai (ten_de_tai, kinh_phi, noi_thuc_tap) VALUES
(N'Nghiên cứu về biến đổi khí hậu', 50000000, N'Trường Đại học ABC'),
(N'Ứng dụng trí tuệ nhân tạo trong y học', 70000000, N'Bệnh viện XYZ'),
(N'Phát triển ứng dụng di động mới', 30000000, N'Công ty ABCD'),
(N'Nghiên cứu về nguồn nước sạch', 45000000, N'Viện Nghiên cứu Môi trường'),
(N'Tạo ra vật liệu mới có tính chất đặc biệt', 55000000, N'Viện Khoa học Công nghệ'),
(N'Phát triển hệ thống quản lý thông tin', 40000000, N'Công ty CDE'),
(N'Nghiên cứu về sinh học phân tử', 60000000, N'Viện Sinh học'),
(N'Ứng dụng trí tuệ nhân tạo trong giáo dục', 65000000, N'Trường Đại học DEF'),
(N'Xây dựng ứng dụng web mới', 35000000, N'Công ty XYZ'),
(N'Nghiên cứu về điện tử phức hợp', 48000000, N'Viện Khoa học Điện tử'),
(N'Phân tích dữ liệu lớn trong kinh doanh', 72000000, N'Công ty EFG'),
(N'Nghiên cứu về tâm lý học phát triển', 60000000, N'Trường Đại học HIJ'),
(N'Phát triển công nghệ sạch cho nông nghiệp', 53000000, N'Viện Nông nghiệp'),
(N'Tối ưu hóa hệ thống điều khiển tự động', 68000000, N'Công ty GHI'),
(N'Nghiên cứu về lịch sử văn hóa', 50000000, N'Trung tâm Văn hóa quốc gia');

select * from GiangVien
select * from SinhVien
select * from Detai

INSERT INTO HuongDan (ma_de_tai, ma_gv_huong_dan, ma_sv_lam_do_an, ket_ket) VALUES
(1, 17, 15, N'Đang trong quá trình nghiên cứu'),
(2, 18, 17, N'Đang phát triển ứng dụng'),
(3, 19, 18, N'Hoàn thành phần mềm đầu tiên'),
(4, 20, 19, N'Đang thu thập dữ liệu'),
(5, 21, 20, N'Bắt đầu thiết kế thí nghiệm'),
(6, 22, 21, N'Đang thực hiện các thử nghiệm'),
(7, 23,22, N'Đang phân tích kết quả'),
(8, 24, 23, N'Đang viết báo cáo giữa kỳ'),
(9, 25, 24, N'Hoàn thành báo cáo cuối kỳ'),
(10, 26, 25, N'Chuẩn bị báo cáo cuối kỳ'),
(11, 27, 26, N'Đang xây dựng bài thuyết trình'),
(12, 28, 27, N'Chuẩn bị thuyết trình'),
(13, 29, 28, N'Thực hiện thí nghiệm cuối cùng'),
(14, 30, 29, N'Đang viết kết luận'),
(15, 31, 30, N'Hoàn thành và bảo vệ luận văn');

select * from HuongDan


--1.Đưa ra thông tin gồm mã số, họ tênvà tên khoa của tất cả các giảng viên
select GiangVien.ma_gv, GiangVien.tengv, Khoa.ten_khoa from GiangVien
join Khoa on Khoa.ma_khoa = GiangVien.ma_khoa

--2.Đưa ra thông tin gồm mã số, họ tên và tên khoa của các giảng viên của 
--khoa ‘DIA LY va QLTN’
select GiangVien.ma_gv, GiangVien.tengv, Khoa.ten_khoa from GiangVien
join Khoa on Khoa.ma_khoa = GiangVien.ma_khoa
where Khoa.ten_khoa = N'Địa lý và QLTT'

select * from Khoa
select * from GiangVien
select * from SinhVien

--3.Cho biết số sinh viên của khoa ‘CONG NGHE SINH HOC’
select count(*) as N'số sinh viên của khoa công nghệ sinh học' from SinhVien
join Khoa on Khoa.ma_khoa = SinhVien.ma_khoa
where Khoa.ten_khoa = N'Công nghệ sinh học'

select 
	count(SinhVien.ma_sinh_vien) as N'số sinh viên của khoa công nghệ sinh học' 
from SinhVien
join Khoa on Khoa.ma_khoa = SinhVien.ma_khoa
where Khoa.ten_khoa = N'Công nghệ sinh học'

--4.Đưa ra danh sách gồm mã số, họ tên của các sinh viên khoa ‘TOAN’
select * from Khoa

select SinhVien.ma_sinh_vien, SinhVien.hotensv from SinhVien
where SinhVien.ma_khoa = 2

--5.Cho biết số giảng viên của khoa ‘CONG NGHE SINH HOC’
select * from Khoa
select * from GiangVien
select count(*) as N'số giảng viên' from GiangVien
join Khoa on Khoa.ma_khoa = GiangVien.ma_khoa
where Khoa.ten_khoa = N'Công nghệ sinh học'

--6.Cho biết thông tin về sinh viên không tham gia thực tập
-- not exits
select * from SinhVien
where not exists (
	select HuongDan.ma_huong_dan from HuongDan
	where SinhVien.ma_sinh_vien = HuongDan.ma_sv_lam_do_an
)
	
--7.Đưa ra mã khoa, tên khoa và số giảng viên của mỗi khoa
select Khoa.ma_khoa, Khoa.ten_khoa, count(Khoa.ma_khoa) as N'Số Giảng Viên' from Khoa 
join GiangVien on Khoa.ma_khoa = GiangVien.ma_khoa
group by Khoa.ma_khoa, Khoa.ten_khoa

select * from GiangVien
select * from HuongDan

--8.Cho biết số điện thoại của khoa mà sinh viên có 
--tên ‘Le van son’ đang theo học


--9.Cho biết mã số và tên của các đề tài do giảng viên ‘Tran son’ hướng dẫn
select Detai.ma_de_tai, Detai.ten_de_tai from Detai
join HuongDan on HuongDan.ma_de_tai = Detai.ma_de_tai
join GiangVien on GiangVien.ma_gv = HuongDan.ma_gv_huong_dan
where GiangVien.tengv = N'Tran son'

--10.Cho biết tên đề tài không có sinh viên nào thực tập
select Detai.ten_de_tai from Detai 
where not exists (select * from HuongDan where Detai.ma_de_tai = HuongDan.ma_de_tai)

--11.Cho biết mã số, họ tên, tên khoa của các giảng viên hướng dẫn từ 1 sinh viên trở lên.
-- having => dùng để so sánh 1 trường nào đó 

select GiangVien.ma_gv, GiangVien.tengv, Khoa.ten_khoa from HuongDan
join GiangVien on GiangVien.ma_gv = HuongDan.ma_gv_huong_dan
join Khoa on Khoa.ma_khoa = GiangVien.ma_khoa
group by GiangVien.ma_gv,  GiangVien.tengv, Khoa.ten_khoa
having count(GiangVien.ma_gv) >= 1

select GiangVien.ma_gv, GiangVien.tengv, Khoa.ten_khoa from GiangVien
join Khoa on Khoa.ma_khoa = GiangVien.ma_khoa 
where GiangVien.ma_gv in (
	select GiangVien.ma_gv from HuongDan
	join GiangVien on GiangVien.ma_gv = HuongDan.ma_gv_huong_dan
	group by GiangVien.ma_gv
	having count(GiangVien.ma_gv) >= 1
)

--12.Cho biết mã số, tên đề tài của đề tài có kinh phí cao nhất
--> min, max
select * from Detai
select Detai.ma_de_tai, Detai.ten_de_tai, Detai.kinh_phi from Detai
group by Detai.ma_de_tai, Detai.ten_de_tai, Detai.kinh_phi
having max(Detai.kinh_phi) = (select max(Detai.kinh_phi) from Detai)



select Detai.ma_de_tai, Detai.ten_de_tai, Detai.kinh_phi from Detai
where Detai.kinh_phi = (select max(Detai.kinh_phi) from Detai)

--13.Cho biết mã số và tên các đề tài có nhiều hơn 2 sinh viên tham gia thực tập
select Detai.ma_de_tai, Detai.ten_de_tai from HuongDan
join Detai on HuongDan.ma_de_tai = Detai.ma_de_tai
group by Detai.ma_de_tai, Detai.ten_de_tai
having count(HuongDan.ma_de_tai) >= 2

select * from HuongDan

--14.Đưa ra mã số, họ tên, kết quả của các sinh viên khoa ‘DIALY và QLTN’
select * from Khoa
select * from SinhVien
select SinhVien.ma_sinh_vien, SinhVien.hotensv, HuongDan.ket_ket from SinhVien
join Khoa on Khoa.ma_khoa = SinhVien.ma_khoa
join HuongDan on HuongDan.ma_sv_lam_do_an = SinhVien.ma_sinh_vien
where Khoa.ten_khoa = N'Địa lý và QLTT'

--15.Đưa ra tên khoa, số lượng sinh viên của mỗi khoa
select Khoa.ten_khoa, COUNT(SinhVien.ma_sinh_vien) from Khoa 
join SinhVien on SinhVien.ma_khoa = Khoa.ma_khoa
group by Khoa.ten_khoa


--16.Cho biết thông tin về các sinh viên thực tập tại quê nhà
select * from SinhVien
join HuongDan on HuongDan.ma_sv_lam_do_an = SinhVien.ma_sinh_vien
join Detai on Detai.ma_de_tai = HuongDan.ma_de_tai
where SinhVien.quequan = Detai.noi_thuc_tap

select * from SinhVien
select * from Detai
--17.Hãy cho biết thông tin về những sinh viên chưa có điểm thực tập
select * from SinhVien
join HuongDan on HuongDan.ma_sv_lam_do_an = SinhVien.ma_sinh_vien
where HuongDan.ket_ket is null

select * from HuongDan

--18.Đưa ra danh sách gồm mã số, họ tên các sinh viên có kết quả "Hoàn thành và bảo vệ luận văn"
select SinhVien.ma_sinh_vien, SinhVien.hotensv from SinhVien
join HuongDan on SinhVien.ma_sinh_vien = HuongDan.ma_sv_lam_do_an
group by SinhVien.ma_sinh_vien, SinhVien.hotensv, HuongDan.ket_ket
having HuongDan.ket_ket = N'Hoàn thành và bảo vệ luận văn'

select SinhVien.ma_sinh_vien, SinhVien.hotensv from SinhVien
join HuongDan on SinhVien.ma_sinh_vien = HuongDan.ma_sv_lam_do_an
where HuongDan.ket_ket = N'Hoàn thành và bảo vệ luận văn'
