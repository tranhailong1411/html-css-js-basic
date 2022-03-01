document.addEventListener("DOMContentLoaded",function() {
var xuly=document.getElementsByClassName('1')
var slides =document.querySelectorAll('.cacslide ul li');
for (var i = 0; i < xuly.length; i++) {
	xuly[i].onclick = function(){
		if(( this.classList[0] == "dangchay")||(this.classList[1] == "dangchay")) 
		{this.classList.remove("dangchay");}
	else{
for (var j = 0; j < xuly.length; j++) {
 	xuly[j].classList.remove("dangchay");
}
 	this.classList.toggle("dangchay");
 	var nutkichhoat= this;
 	var vitrinut=0;
 	for ( vitrinut = 0; nutkichhoat=nutkichhoat.previousElementSibling; vitrinut++) {
 	}
// console.log("Vi tri cua phan tu co class kich hoat la " + vitrinut);
	for (var i = 0; i < slides.length; i++) {
		slides[i].classList.remove('active');
		slides[vitrinut].classList.add('active');
	}
	


}
}}},false)