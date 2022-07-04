/* sign up inputs */
var s1 = document.getElementById("s_username");
var s2 = document.getElementById("s_email");
var s3 = document.getElementById("s_password");

document.getElementById("go_signup").onclick = function () {
    var form1 = document.getElementById("form-1");
    form1.classList.remove("d-none");
    var form2 = document.getElementById("form-2");
    form2.classList.add("d-none");
}
document.getElementById("go_signin").onclick = function () {
    var form1 = document.getElementById("form-1");
    form1.classList.add("d-none");
    var form2 = document.getElementById("form-2");
    form2.classList.remove("d-none");
}

if (localStorage.getItem("all_users")) {
    var all_users = [] = JSON.parse(localStorage.getItem("all_users"));
}
else {
    var all_users = [];
}
/* Signup button */
document.getElementById("signup_btn").onclick = function () {
    if (s1.value != "" && s2.value != "" && s3.value != "") {
        var object = {
            s_username: s1.value,
            s_email: s2.value,
            s_pass: s3.value
        }
        all_users.push(object);
        localStorage.setItem("all_users", JSON.stringify(all_users));
        s1.value = "";
        s2.value = "";
        s3.value = "";

        var middle = document.getElementById("middle");
        middle.classList.add("d-none");
        var pro = document.getElementById("pro");
        pro.classList.remove("d-none");

        const myTimeout = setTimeout(myGreeting, 2000);
        function myGreeting() {
            middle.classList.remove("d-none");
            pro.classList.add("d-none");
        }
        function myStopFunction() {
            clearTimeout(myTimeout);
        }
    }
    else{
        alert("Empty Field !");
    }
    return false;
}

/* login button */
var l1 = document.getElementById("l_email");
var l2 = document.getElementById("l_pass");

document.getElementById("login_btn").onclick = function () {
    var extract = JSON.parse(localStorage.getItem("all_users"));
    var not_fount = 0;
    for (let i = 0; i < extract.length; i++) {
        if (l1.value == extract[i].s_email) {
            // alert("Login Success");
            // break;
            var index = i;
            if (l2.value == extract[index].s_pass) {
                // alert(extract[index].s_pass);
                window.open("profile.html","_self");
                sessionStorage.setItem("active_user","yes");
                not_fount = not_fount + 1;
            }
            else {
                alert("Password not match");
                not_fount = not_fount + 1;
            }
            l1.value = "";
            l2.value = "";
        }
    }
    if (not_fount == 0) {
        alert("User not found !");
        l1.value = "";
        l2.value = "";
    }
}