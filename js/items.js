

setInterval(displayHello, 1000);

function displayHello() {
    var items = document.getElementById("items").innerHTML = localStorage.length - 1;
    var r1 = document.getElementById("row1");
    var r2 = document.getElementById("row2");
    var r3 = document.getElementById("row3");
    if (localStorage.getItem("w1")) {
        r1.classList.remove("d-none");
    }
    if (localStorage.getItem("w2")) {
        r2.classList.remove("d-none");
    }
    if (localStorage.getItem("w3")) {
        r3.classList.remove("d-none");
    }
}
document.getElementById("s1").onkeydown = function () {
    this.type = "password";
}
document.getElementById("s2").onkeydown = function () {
    this.type = "password";
}
document.getElementById("s3").onkeydown = function () {
    this.type = "password";
}
document.getElementById("s4").onkeydown = function () {
    this.type = "password";
}
document.getElementById("cl1").onclick = function () {
    document.getElementById("row1").style.display = "none";
    var w1_amt = JSON.parse(localStorage.getItem("w1"));
    var calc = (w1_amt.price * w1_amt.qty);
    var del_amt = JSON.parse(localStorage.getItem("amount"));
    var new_amt = del_amt - calc;
    localStorage.setItem("amount", JSON.stringify(new_amt));
    document.getElementById("subtotal").innerHTML = new_amt;
    document.getElementById("total").innerHTML = new_amt;
    localStorage.removeItem("w1");

}
document.getElementById("cl2").onclick = function () {
    document.getElementById("row2").style.display = "none";
    var w2_amt = JSON.parse(localStorage.getItem("w2"));
    var calc = (w2_amt.price * w2_amt.qty);
    var del_amt = JSON.parse(localStorage.getItem("amount"));
    var new_amt = del_amt - calc;
    localStorage.setItem("amount", JSON.stringify(new_amt));
    document.getElementById("subtotal").innerHTML = new_amt;
    document.getElementById("total").innerHTML = new_amt;
    localStorage.removeItem("w2");

}
document.getElementById("cl3").onclick = function () {
    document.getElementById("row3").style.display = "none";
    var w3_amt = JSON.parse(localStorage.getItem("w3"));
    var calc = (w3_amt.price * w3_amt.qty);
    var del_amt = JSON.parse(localStorage.getItem("amount"));
    var new_amt = del_amt - calc;
    localStorage.setItem("amount", JSON.stringify(new_amt));
    document.getElementById("subtotal").innerHTML = new_amt;
    document.getElementById("total").innerHTML = new_amt;
    localStorage.removeItem("w3");
    //location.href = location.href;
}
var amt_box = document.getElementById("subtotal").innerHTML;
var obj = {
    amt: amt_box
}
localStorage.setItem("amount", JSON.stringify(obj));

if (localStorage.getItem("w1")) {
    var data = JSON.parse(localStorage.getItem("w1"));
    var amount = Number(data.qty * data.price);
    var previous = JSON.parse(localStorage.getItem("amount"));
    previous.amt = amount;
    localStorage.setItem("amount", previous.amt);
    document.getElementById("subtotal").innerHTML = previous.amt;
    document.getElementById("total").innerHTML = previous.amt;
    document.getElementById("q1").innerHTML = data.qty;
}
if (localStorage.getItem("w2")) {
    var data = JSON.parse(localStorage.getItem("w2"));
    var amount = Number(data.qty * data.price);
    var previous = JSON.parse(localStorage.getItem("amount"));
    var sec = previous + amount;
    localStorage.setItem("amount", sec);
    document.getElementById("subtotal").innerHTML = sec;
    document.getElementById("total").innerHTML = sec;
    document.getElementById("q2").innerHTML = data.qty;
}

if (localStorage.getItem("w3")) {
    var data = JSON.parse(localStorage.getItem("w3"));
    var amount = Number(data.qty * data.price);
    var previous = JSON.parse(localStorage.getItem("amount"))
    var sec = previous + amount;
    localStorage.setItem("amount", sec);
    document.getElementById("subtotal").innerHTML = sec;
    document.getElementById("total").innerHTML = sec;

}

document.getElementById("inc1").onclick = function () {
    var inc1 = JSON.parse(localStorage.getItem("w1"))
    var x = inc1.qty;
    x = x + 1;
    w1 = {
        product: 'Titan Watch',
        qty: x,
        price: '100'
    }
    localStorage.setItem("w1", JSON.stringify(w1));
    console.log(x);
    // location.href = location.href;
    document.getElementById("q1").innerHTML = x;
    var newPr = JSON.parse(localStorage.getItem("amount"));
    newPr = newPr + 100;
    localStorage.setItem("amount", JSON.stringify(newPr));
    document.getElementById("subtotal").innerHTML = newPr;
    document.getElementById("total").innerHTML = newPr;
}
document.getElementById("dec1").onclick = function () {
    var inc1 = JSON.parse(localStorage.getItem("w1"))
    var x = inc1.qty;
    if (x >= 1) {
        x = x - 1;
        w1 = {
            product: 'Titan Watch',
            qty: x,
            price: '100'
        }
        localStorage.setItem("w1", JSON.stringify(w1));
        console.log(x);
        document.getElementById("q1").innerHTML = x;
        var newPr = JSON.parse(localStorage.getItem("amount"));
        newPr = newPr - 100;
        localStorage.setItem("amount", JSON.stringify(newPr));
        document.getElementById("subtotal").innerHTML = newPr;
        document.getElementById("total").innerHTML = newPr;

    }
}

document.getElementById("inc2").onclick = function () {
    var inc2 = JSON.parse(localStorage.getItem("w2"))
    var x = inc2.qty;
    x = x + 1;
    w2 = {
        product: 'Rado Watch',
        qty: x,
        price: '150'
    }
    localStorage.setItem("w2", JSON.stringify(w2));
    console.log(x);
    // location.href = location.href;
    document.getElementById("q2").innerHTML = x;
    var newPr = JSON.parse(localStorage.getItem("amount"));
    newPr = newPr + 150;
    localStorage.setItem("amount", JSON.stringify(newPr));
    document.getElementById("subtotal").innerHTML = newPr;
    document.getElementById("total").innerHTML = newPr;
}
document.getElementById("dec2").onclick = function () {
    var inc2 = JSON.parse(localStorage.getItem("w2"))
    var x = inc2.qty;
    if (x >= 1) {
        x = x - 1;
        w2 = {
            product: 'Rado Watch',
            qty: x,
            price: '150'
        }
        localStorage.setItem("w2", JSON.stringify(w2));
        console.log(x);
        document.getElementById("q2").innerHTML = x;
        var newPr = JSON.parse(localStorage.getItem("amount"));
        newPr = newPr - 150;
        localStorage.setItem("amount", JSON.stringify(newPr));
        document.getElementById("subtotal").innerHTML = newPr;
        document.getElementById("total").innerHTML = newPr;

    }
}
document.getElementById("inc3").onclick = function () {
    var inc3 = JSON.parse(localStorage.getItem("w3"))
    var x = inc3.qty;
    x = x + 1;
    w3 = {
        product: 'Rolex Watch',
        qty: x,
        price: '300'
    }
    localStorage.setItem("w3", JSON.stringify(w3));
    console.log(x);
    // location.href = location.href;
    document.getElementById("q3").innerHTML = x;
    var newPr = JSON.parse(localStorage.getItem("amount"));
    newPr = newPr + 300;
    localStorage.setItem("amount", JSON.stringify(newPr));
    document.getElementById("subtotal").innerHTML = newPr;
    document.getElementById("total").innerHTML = newPr;
}

document.getElementById("dec3").onclick = function () {
    var inc3 = JSON.parse(localStorage.getItem("w3"))
    var x = inc3.qty;
    if (x >= 1) {
        x = x - 1;
        w3 = {
            product: 'Rolex Watch',
            qty: x,
            price: '300'
        }
        localStorage.setItem("w3", JSON.stringify(w3));
        console.log(x);
        document.getElementById("q3").innerHTML = x;
        var newPr = JSON.parse(localStorage.getItem("amount"));
        newPr = newPr - 300;
        localStorage.setItem("amount", JSON.stringify(newPr));
        document.getElementById("subtotal").innerHTML = newPr;
        document.getElementById("total").innerHTML = newPr;

    }
}
document.getElementById("apply").onclick = function () {
    var code = document.getElementById("coupon").value;
    if (code == "ARSIL99" || code == "Arsil99" || code == "arsil99") {
        var valid = document.getElementById("valid");
        var invalid = document.getElementById("invalid");
        valid.classList.remove("d-none");
        invalid.classList.add("d-none");
        var dis_amt = JSON.parse(localStorage.getItem("amount"));
        var new_amt = dis_amt - 100;
        localStorage.setItem("amount", JSON.stringify(new_amt));
        document.getElementById("subtotal").innerHTML = new_amt;
        document.getElementById("total").innerHTML = new_amt;
        var apply = document.getElementById("apply");
        apply.setAttribute("disabled","disabled");
        apply.style.background = "gray";
        apply.innerHTML = "Applied <i class='fa fa-check-circle'></i>";

    }
    else {
        var valid = document.getElementById("valid");
        var invalid = document.getElementById("invalid");
        invalid.classList.remove("d-none");
        valid.classList.add("d-none");
    }
}
// if(localStorage.getItem("w1")==null && localStorage.getItem("w2") && localStorage.getItem("w3")){
//     document.getElementById("subtotal").innerHTML = 0;
//     document.getElementById("total").innerHTML = 0;
// }