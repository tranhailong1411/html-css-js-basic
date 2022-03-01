function XuLy(){
    var objA = document.getElementById('1');
    var objB = document.getElementById('2');
    var a = objA.value;
    var b = objB.value;
    if ((a == '') ||(b =='')) {
    alert('yêu cầu bạn nhập đủ tài khoản mật khẩu')
}
    if((a=='long')&&(b=='20193305')){
        alert("đăng nhập thành công");
    } else{alert("Đăng nhập sai ");}


}