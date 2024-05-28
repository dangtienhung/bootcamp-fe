CREATE DATABASE THE_GIOI_DONG_VAT

USE THE_GIOI_DONG_VAT

-- DATABASE MôI TRƯỜNG SỐNG CỦA ĐỘNG VẬT
CREATE TABLE MOI_TRUONG_SONG (
	MA INT NOT NULL IDENTITY,
	TEN_MOI_TRUONG NVARCHAR(100) NOT NULL UNIQUE,
	
	CONSTRAINT PK_MOI_TRUONG_SONG PRIMARY KEY (MA)
)

CREATE TABLE DONG_VAT (
	MA_DV INT NOT NULL IDENTITY,
	TEN_DV NVARCHAR(100) NOT NULL UNIQUE,
	SO_CHAN INT DEFAULT 0 NOT NULL,
	TUOI_THO INT NOT NULL,

	MA_MOI_TRUONG_SONG INT NOT NULL,

	CONSTRAINT CK_TEN CHECK(LEN(TEN_DV) >= 2),
	CONSTRAINT CK_SO_CHAN CHECK(SO_CHAN % 2 = 0 AND SO_CHAN >= 0),
	CONSTRAINT CK_TUOI_THO CHECK(TUOI_THO > 0),

	CONSTRAINT PK_DONG_VAT PRIMARY KEY (MA_DV),
	CONSTRAINT FK_DONG_VAT_MOI_TRUONG_SONG FOREIGN KEY (MA_MOI_TRUONG_SONG) REFERENCES MOI_TRUONG_SONG(MA)
)

-- Chèn một số môi trường ví dụ vào bảng MOI_TRUONG_SONG
INSERT INTO MOI_TRUONG_SONG (TEN_MOI_TRUONG)
VALUES 
(N'Môi trường trên cạn'),
(N'Môi trường dưới nước'),
(N'Môi trường trên không'),
(N'Môi trường rừng nhiệt đới'),
(N'Môi trường sa mạc'),
(N'Môi trường núi cao'),
(N'Môi trường đồng cỏ'),
(N'Môi trường thành thị'),
(N'Môi trường biển đảo'),
(N'Môi trường nông thôn');

DROP TABLE MOI_TRUONG_SONG
DROP TABLE DONG_VAT

-- Chèn dữ liệu cho 10 động vật vào bảng DONG_VAT
INSERT INTO DONG_VAT (TEN_DV, SO_CHAN, TUOI_THO, MA_MOI_TRUONG_SONG)
VALUES 
(N'Sóc', 4, 8, 1), -- Môi trường trên cạn
(N'Cá Sấu', 4, 70, 2), -- Môi trường dưới nước
(N'Chim Én', 2, 6, 3), -- Môi trường trên không
(N'Khỉ', 2, 20, 1), -- Môi trường trên cạn
(N'Cáo', 4, 10, 8), -- Môi trường thành thị
(N'Hải Cẩu', 4, 30, 9), -- Môi trường biển đảo
(N'Rùa', 4, 100, 10), -- Môi trường nông thôn
(N'Gấu', 4, 25, 1), -- Môi trường trên cạn
(N'Cá Heo', 0, 40, 2), -- Môi trường dưới nước
(N'Đại Bàng', 2, 25, 11); -- Môi trường trên không

SELECT * FROM DONG_VAT
SELECT * FROM MOI_TRUONG_SONG

SELECT 
	DONG_VAT.MA_DV,
	DONG_VAT.TEN_DV,
	DONG_VAT.SO_CHAN,
	DONG_VAT.TUOI_THO,
	MOI_TRUONG_SONG.TEN_MOI_TRUONG
FROM DONG_VAT
JOIN MOI_TRUONG_SONG ON DONG_VAT.MA_MOI_TRUONG_SONG = MOI_TRUONG_SONG.MA
