// for(let i=0;i<6;i++){
//     document.getElementsByClassName('btn')[i].onclick = function(){
//         this.innerHTML = "<i class='fa fa-check'></i> Added";
//     }
// }
var items = document.getElementById("items").innerHTML = localStorage.length - 1;

if (localStorage.getItem("w1")) {
    document.getElementById("b1").innerHTML = "<i class='fa fa-check'></i> Added";
}
document.getElementById("b1").onclick = function () {
    w1 = {
        product: 'Titan Watch',
        qty : 1,
        price: '100'
    }
    localStorage.setItem("w1", JSON.stringify(w1));
    this.innerHTML = "<i class='fa fa-check'></i> Added";
    console.log(w1);
    location.href = location.href;
}
if (localStorage.getItem("w2")) {
    document.getElementById("b2").innerHTML = "<i class='fa fa-check'></i> Added";
}
document.getElementById("b2").onclick = function () {
    w2 = {
        product: 'Rado Watch',
        qty : 1,
        price: '150'
    }
    localStorage.setItem("w2", JSON.stringify(w2));
    this.innerHTML = "<i class='fa fa-check'></i> Added";
    console.log(w2);
    location.href = location.href;
}
if (localStorage.getItem("w3")) {
    document.getElementById("b3").innerHTML = "<i class='fa fa-check'></i> Added";
}
document.getElementById("b3").onclick = function () {
    w3 = {
        product: 'Rolex Watch',
        qty : 1,
        price: '300'
    }
    localStorage.setItem("w3", JSON.stringify(w3));
    this.innerHTML = "<i class='fa fa-check'></i> Added";
    console.log(w3);
    location.href = location.href;
}