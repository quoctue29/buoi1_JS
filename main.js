/*--- Bài 1 --- */

/**
 * Tính tiền lương nhân viên
 * Mô hình 3 khối
 *  - Đầu vào
 *      + luong1Ngay
 *      + soNgayLam
 *
 *  - Xử lý
 *      + Tao bien luong1Ngay gan gia tri la 100000
 *      + Tao bien soNgayLam gan gia tri la 30
 *      + Tao bien tienLuong gan gia tri la 0
 *      + tienLuong = luong1Ngay * soNgayLam
 *  - Đầu ra
 *      + tienLuong = ?
 */
//khởi tạo biến
var luong1Ngay = 0 ;
var soNgayLam = 0 ;
var tienLuong = 0 ;
//gán giá trị cho biến
luong1Ngay = 100000;
soNgayLam = 30;
tienLuong = luong1Ngay * soNgayLam ;
console.log("bài 1 tiền lương nhân viên là: " + tienLuong);


/*--- Bài 2 --- */

/**
 * Tính giá trị trung bình của 5 số thực
 * Mô hình 3 khối
 * Gọi n1, n2, n3, n4, n5 là lần lượt 5 số thực
 *  - Đầu vào
 *      + n1
 *      + n2
 *      + n3
 *      + n4
 *      + n5
 *  - Xử lý
 *      + tao bien n1 gan gia tri la 1
 *      + tao bien n2 gan gia tri la 2 
 *      + tao bien n3 gan gia tri la 3
 *      + tao bien n4 gan gia tri la 4
 *      + tao bien n5 gan gia tri la 5
 *      + tao bien giaTriTrungBinh gan gia tri la 0
 *      + giaTriTrungBinh = tổng 5 số thực của người nhập chia cho 5
 *      + giaTriTrungBinh = (n1+n2+n3+n4+n5)/5
 *  - Đầu ra
 *      + giaTriTrungBinh = ?
 */
//khởi tạo biến
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;
var giaTriTrungBinh = 0 ;
//gán giá trị cho biến
n1 = 1 ;
n2 = 2 ; 
n3 = 3 ;
n4 = 4 ;
n5 = 5 ; 
giaTriTrungBinh = (n1+n2+n3+n4+n5)/5 ;
console.log("bài 2 giá trị trung bình của 5 số thực này là: " + giaTriTrungBinh);

/*--- Bài 3 --- */

/**
 * Quy đổi tiền 
 * Mô hình 3 khối
 *  - Đầu vào
 *      + giaUSD
 *      + giaNguoiDungNhap
 *
 *  - Xử lý
 *      + Tao bien giaUSD gan gia tri la 23500
 *      + Tao bien giaNguoiDungNhap gan gia tri la 5
 *      + nguoiDungNhap = giaNguoiDungNhap * giaUSD
 */

var giaUSD = 23500;
var giaNguoiDungNhap = 5;
var nguoiDungNhap = giaNguoiDungNhap * giaUSD ;
console.log("bài 3 giá người dùng nhập 5 USD xuất ra " + nguoiDungNhap);

/*--- Bài 4 --- */

/**
 * Tính diện tích, chu vi HCN 
* Mô hình 3 khối
 *  - Đầu vào
 *      + dai
 *      + rong
 *
 *  - Xử lý
 *      + Tao bien dai gan gia tri la 7
 *      + Tao bien rong gan gia tri la 3
 *      + Tao bien dienTich gan gia tri la 0
 *      + Tao bien chuVi gan gia tri la 0
 *      + dienTich = dai*rong
 *      + chuVi = (dai+rong)*2
 *
 *  - Đầu ra
 *      + dienTich = ?
 *      + chuVi = ?
 */
//khoi tao bien
var dai = 0;
var rong = 0;
var dienTich = 0;
var chuVi = 0;
//gian gia tri cho bien
dai = 7;
rong = 3;
dienTich = dai * rong;
chuVi = (dai + rong)*2;
console.log("bài 4 diện tích HCN là: " + dienTich);
console.log("bài 4 chu vi HCN là: " + chuVi);



/*--- Bài 5 --- */

/**
 * 
 * Tong 2 ky so
 * Giả sử:
 *  n = 45 => 4 + 5 => total = 9
 * Mô hình 3 khối
 * - Đầu vào
 *      + n = 45
 * - Xử lý
 *      + Tach lay hang chuc => n % 100 / 10 => lam tron so Math.floor( n % 100 / 10)
 *      + Tach lay hang don vi => n % 10
 *
 *      + tong = hang chuc + don vi
 *
 * - Đầu ra
 *      + tong = ?
 */

 var n = 45;

 var hangChuc = Math.floor((n % 100) / 10);
 var hangDonVi = n % 10;
 
 var tong2KySo = hangChuc + hangDonVi;
 
 console.log("Bài 5 Tổng 2 ký số là : " + tong2KySo);