// bai 1
function tinhTienLuong() 
{
    var numOfDay = document.getElementById("numOfDay").value;
    var result = numOfDay*100000;
    alert("Tiền lương của bạn là: " + result);
}

//bai 2
function tinhTrungBinh()
{
    var num1 = +document.getElementById("number1").value;
    var num2 = +document.getElementById("number2").value;
    var num3 = +document.getElementById("number3").value;
    var num4 = +document.getElementById("number4").value;
    var num5 = +document.getElementById("number5").value;
    var trungBinh = (num1 + num2 + num3 + num4 + num5)/5;
    alert("Trung bình cộng của 5 số là: " + trungBinh);
}

//bai 3
function quyDoiTien()
{
    var number = document.getElementById("number").value;
   var result = number*23500;
   alert("Số tiền nhận được là: " + result);
}

//bai 4
function hinhChuNhat()
{
    var length = +document.getElementById("length").value;
    var width = +document.getElementById("width").value;
    var dienTich = length*width;
    var chuVi=(length+width)*2;
    alert("Diện tích hình chữ nhật là: " + dienTich);
    alert("Chu vi hình chữ nhật là: "+ chuVi);
}

//bai 5
function tinhTong() 
{
    var chuSo = document.getElementById("chuSo").value;
    var chuSoHangDonVi = chuSo % 10;
    var chuSoHangChuc = (chuSo - chuSoHangDonVi) / 10;
    var result = chuSoHangChuc + chuSoHangDonVi;
    alert("Tổng 2 ký số là: " + result);
}