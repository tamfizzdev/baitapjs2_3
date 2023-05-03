function hinhchunhat() {
    var dai = document.getElementById('chieuDai').value;
    var rong = document.getElementById('chieuRong').value;

    var chuVi = (dai  + rong) * 2;
    var dienTich = dai * rong;
    document.getElementById('chuVi').innerHTML = chuvi;
    document.getElementById('dienTich').innerHTML = dienTich;
}