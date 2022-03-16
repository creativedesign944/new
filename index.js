var loading=document.getElementById("loading");
function load(){
  loading.style.display="none";
}
setTimeout(load,1000);
var togg=document.getElementById("res");
var non=document.getElementById("non");
var rot=document.getElementById("rot");
var roti=document.getElementById("roti");
var respon=document.getElementById("respon");
togg.addEventListener("click",function(){
  var nav=document.getElementById("nav");
  non.classList.toggle("non");
  respon.classList.toggle("change");
  rot.classList.toggle("rotate");
  roti.classList.toggle("rotate2");
nav.classList.toggle("active")
});
