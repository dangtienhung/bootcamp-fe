-- câu lệnh đầu tiên: tạo ra 1 database
-- QuanLyShop/quan_ly_shop => nên đặt
-- Quản lý shop => không được đặt tên db tiếng việt
create database quan_ly_shop

use quan_ly_shop

-- các kiểu dữ liệu trong sql
int => số nguyên 1, 2, 3, 5
float => 1.2 -- -1000 => 1000
double => 1.3 -- -2000 => 2000
varchar(50) => string
char(50) => string
bool

-- postgreql/ sql server/ sql lite/ nosql/ mariadb/ mysql


-- tạo ra 1 table
create table Products (
	name_product nvarchar(200),
	price float,
	image varchar(200),
	id_product int
)

create table Category (
	name_category nvarchar(100),
	image varchar(255)
)

-- thêm dữ liệu vào trong bảng chúng ta vừa tạo
insert into Category (name_category, image)
values 
	(N'Danh mục 10', 'imge2'),
	(N'Danh mục 11', 'imge3'),
	(N'Danh mục 45', 'imge4'),
	(N'Danh mục 56', 'imge5')

-- xem tất cả các dư liệu trong table category
select * from Category
select name_category, image from Category

-- lấy ra 1 sản phẩm
select * from Category
where image = 'imge2%'

-- update 1 trường dữ liệu
update Category
set 
	name_category = N'Danh mục 56 update',
	image = 'image update hahihi'
where name_category = N'Danh mục 56 update'


-- xoá đi 1 dữ liệu trong table
delete from Category
where image = 'imge4'
