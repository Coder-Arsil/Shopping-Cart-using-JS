document.getElementById("cart-btn").onclick = function(){
    window.open("items.html","_self");
}
if(localStorage.getItem("w1")){
    document.getElementById("b1").style.background = "green";
    document.getElementById("b1").style.border = "none";
}
if(localStorage.getItem("w2")){
    document.getElementById("b2").style.background = "green";
    document.getElementById("b2").style.border = "none";
}
if(localStorage.getItem("w3")){
    document.getElementById("b3").style.background = "green";
    document.getElementById("b3").style.border = "none";
}