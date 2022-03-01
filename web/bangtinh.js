function BatDauTinh() {
    var objA = document.getElementById('1');
    var objB = document.getElementById('2');
    var objC = document.getElementById('3');
    var objD = document.getElementById('4');
    var objE = document.getElementById('5');
    var a=parseInt(objA.value);
    var b=parseInt(objB.value);
    var c=parseInt(objC.value);
    var delta= b*b-4*a*c;
    var x;
    if((a==0)&& (b==0) &&(c==0))
    {
        alert('Phương trình vô số nghiệm');
    }
    if((a==0)&& (b==0) &&(c!=0))
    {
        alert('Phương trình vô nghiệm');
    }
    if((a==0)&& (b!=0) &&(c!=0)) 
    {   
        x= (-c/b);
        alert('x= ' + x);
    }
    if ((a!= 0) && (delta < 0))
        {alert('phương trình vô nghiệm ');}
    else if (delta == 0) {
        objD.value= -b/(2*a);
        objE.value='không có';
    }
    else{
        objD.value= (-b+Math.sqrt(delta))/(2*a);
        objE.value= (-b-Math.sqrt(delta))/(2*a);
    }
   


}