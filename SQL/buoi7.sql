-- Tạo cơ sở dữ liệu để quản lý sinh viên
create database quan_ly_diem_sinh_vien
--Yêu cầu:
use quan_ly_diem_sinh_vien


create table lop (
	id_lop int not null identity,
	ten_lop nvarchar(50) not null,
	constraint pk_lop primary key (id_lop)
)

create table mon_hoc (
	id_mon_hoc int not null identity,
	ten_mon_hoc  nvarchar(100) not null,
	constraint pk_mon_hoc primary key (id_mon_hoc)
)

create table sinh_vien (
	id_sinh_vien int not null identity,
	ten_sinh_vien nvarchar(100) not null,
	ma_lop int,
	constraint fk_sinh_vien_lop_hoc foreign key (ma_lop) references lop(id_lop),
	constraint pk_sinh_vien primary key (id_sinh_vien),
	constraint ck_do_dai_ten check(len(sinh_vien.ten_sinh_vien) >= 2)
)

create table diem (
	id_diem int not null identity,
	diem float default 0,
	ma_sv int not null,
	ma_mon_hoc int not null,
	constraint pk_diem primary key(id_diem),
	constraint fk_diem_sinh_vien foreign key (ma_sv) references sinh_vien(id_sinh_vien),
	constraint fk_diem_mon_hoc foreign key (ma_mon_hoc) references mon_hoc(id_mon_hoc),
	constraint ck_diem check(diem >= 0 and diem <= 10)
)

-- Inserting data into the lop table
INSERT INTO lop (ten_lop) VALUES 
('Lop A'),
('Lop B'),
('Lop C'),
('Lop D'),
('Lop E'),
('Lop F'),
('Lop G'),
('Lop H'),
('Lop I'),
('Lop J');

-- Inserting data into the mon_hoc table
INSERT INTO mon_hoc (ten_mon_hoc) VALUES 
('Mathematics'),
('Physics'),
('Chemistry'),
('Biology'),
('History'),
('Literature'),
('Computer Science'),
('Geography'),
('Art'),
('Music');

-- Inserting data into the sinh_vien table
INSERT INTO sinh_vien (ten_sinh_vien, ma_lop) VALUES 
('John Doe', 1),
('Alice Smith', 2),
('Bob Johnson', 3),
('Emma Brown', 4),
('Michael Wilson', 5),
('Sophia Martinez', 6),
('William Jones', 7),
('Olivia Taylor', 8),
('James Anderson', 9),
('Emily Thomas', 10);

INSERT INTO sinh_vien (ten_sinh_vien) VALUES 
('John Doe 1'),
('Alice Smith 2');

-- Inserting data into the sinh_vien table with random ma_lop values
INSERT INTO sinh_vien (ten_sinh_vien, ma_lop)
values 
	(N'dang tien hung', 10)


-- Inserting data into the diem table with scores ranging from 0 to 10
INSERT INTO diem (diem, ma_sv, ma_mon_hoc) 
VALUES 
    (ROUND(RAND() * 10, 1), 1, 1),
    (ROUND(RAND() * 10, 1), 2, 2),
    (ROUND(RAND() * 10, 1), 3, 3),
    (ROUND(RAND() * 10, 1), 4, 4),
    (ROUND(RAND() * 10, 1), 5, 5),
    (ROUND(RAND() * 10, 1), 6, 6),
    (ROUND(RAND() * 10, 1), 7, 7),
    (ROUND(RAND() * 10, 1), 8, 8),
    (ROUND(RAND() * 10, 1), 9, 9),
    (ROUND(RAND() * 10, 1), 10, 10);

select * from diem 
select * from sinh_vien
select * from lop
select * from mon_hoc

-- có thông tin sinh viên, lớp, môn, điểm
--có kiểm tra ràng buộc
--Thêm mỗi bảng số bản ghi nhất định
--Lấy ra tất cả sinh viên kèm thông tin lớp (nếu có)
select * from sinh_vien
join lop on lop.id_lop = sinh_vien.ma_lop
select * from sinh_vien
left join lop on lop.id_lop = sinh_vien.ma_lop

--Đếm số sinh viên theo từng lớp
select * from sinh_vien
right join lop on lop.id_lop = sinh_vien.ma_lop

select count(id_sinh_vien) as 'số sinh vien', lop.id_lop, lop.ten_lop from sinh_vien
join lop on lop.id_lop = sinh_vien.ma_lop
group by lop.id_lop, lop.ten_lop

--Lấy sinh viên kèm thông tin điểm và tên môn
--select 
--	count(diem.id_diem) as N'sinh viên và điểm'
--	sinh_vien.id_sinh_vien, sinh_vien.ten_sinh_vien 
--from diem
--join sinh_vien on sinh_vien.id_sinh_vien = diem.id_diem
--group by sinh_vien.id_sinh_vien, sinh_vien.ten_sinh_vien 

select 
	sinh_vien.id_sinh_vien, sinh_vien.ten_sinh_vien,
	diem.diem, mon_hoc.ten_mon_hoc
from sinh_vien
join diem on sinh_vien.id_sinh_vien = diem.ma_sv
join mon_hoc on diem.ma_mon_hoc = mon_hoc.id_mon_hoc

-- lấy ra tất cả thông tin lớp học và tên môn hoc
select lop.id_lop, lop.ten_lop, mon_hoc.ten_mon_hoc from lop
join sinh_vien on sinh_vien.ma_lop = lop.id_lop
join diem on sinh_vien.id_sinh_vien = diem.ma_sv
join mon_hoc on diem.ma_mon_hoc = mon_hoc.id_mon_hoc


--(*) Lấy điểm trung bình của sinh viên trong lớp Lop A
--> diem, sinh vien, lop 
--> avg(diem.diem), ten_lop = Lop A
select * from lop
select * from sinh_vien 
select * from diem 
select * from mon_hoc 
select avg(diem.diem) from sinh_vien
join diem on sinh_vien.id_sinh_vien = diem.ma_sv
right join lop on lop.id_lop = sinh_vien.ma_lop
where lop.ten_lop = 'Lop A'

--(*) Lấy điểm trung bình của sinh viên của môn Art
select avg(diem.diem), sinh_vien.id_sinh_vien, sinh_vien.ten_sinh_vien from sinh_vien
join diem on sinh_vien.id_sinh_vien = diem.ma_sv
join mon_hoc on diem.ma_mon_hoc = mon_hoc.id_mon_hoc
where mon_hoc.ten_mon_hoc = 'Art'
group by sinh_vien.id_sinh_vien, sinh_vien.ten_sinh_vien

--(*) Lấy điểm trung bình của sinh viên theo từng lớp
select avg(diem.diem), lop.id_lop, lop.ten_lop from sinh_vien
right join lop on sinh_vien.ma_lop = lop.id_lop
join diem on sinh_vien.id_sinh_vien = diem.ma_sv
group by lop.id_lop, lop.ten_lop

select avg(diem.diem), sinh_vien.id_sinh_vien, sinh_vien.ma_lop from sinh_vien
right join lop on sinh_vien.ma_lop = lop.id_lop
join diem on sinh_vien.id_sinh_vien = diem.ma_sv
group by  sinh_vien.id_sinh_vien, sinh_vien.ma_lop

select avg(diem.diem) from sinh_vien
right join lop on sinh_vien.ma_lop = lop.id_lop
join diem on sinh_vien.id_sinh_vien = diem.ma_sv
