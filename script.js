var input = document.querySelector(".input")

var output = document.querySelector(".output")
var nine = document.querySelector(".nine")
var eight = document.querySelector(".eight")
var seven = document.querySelector(".seven")
var six = document.querySelector(".six")
var five = document.querySelector(".five")
var four = document.querySelector(".four")
var three = document.querySelector(".three")
var two = document.querySelector(".two")
var one = document.querySelector(".one")
var zero = document.querySelector(".zero")
var dot = document.querySelector(".dot")
var plus = document.querySelector(".plus")
var minus = document.querySelector(".minus")
var mult = document.querySelector(".mult")
var division = document.querySelector(".division")
var ff = document.querySelector(".ff")
var x = document.querySelector(".x")
var C = document.querySelector(".C")
var CE = document.querySelector(".CE")
var E = document.querySelector(".E")
zero.onclick = function() {
    input.innerHTML = input.innerHTML + zero.innerHTML;
}
one.onclick = function() {
    input.innerHTML = input.innerHTML + one.innerHTML;
}
two.onclick = function() {
    input.innerHTML = input.innerHTML + two.innerHTML;
}
three.onclick = function() {
    input.innerHTML = input.innerHTML + three.innerHTML;
}
four.onclick = function() {
    input.innerHTML = input.innerHTML + four.innerHTML;
}
five.onclick = function() {
    input.innerHTML = input.innerHTML + five.innerHTML;
}
six.onclick = function() {
    input.innerHTML = input.innerHTML + six.innerHTML;
}
seven.onclick = function() {
    input.innerHTML = input.innerHTML + seven.innerHTML;
}
eight.onclick = function() {
    input.innerHTML = input.innerHTML + eight.innerHTML;
}
nine.onclick = function() {
    input.innerHTML = input.innerHTML + nine.innerHTML;
}
dot.onclick = function() {
    if (!input.innerHTML.includes(".")) {
        input.innerHTML += "."
    }
}
plus.onclick = function() {
    if (!input.innerHTML.includes("+")) {
        input.innerHTML += "+"
    }
}
minus.onclick = function() {
    if (!input.innerHTML.includes("-")) {
        input.innerHTML += "-"
    }
}
mult.onclick = function() {
    if (!input.innerHTML.includes("*")) {
        input.innerHTML += "*"
    }
}
division.onclick = function() {
    if (!input.innerHTML.includes("/")) {
        input.innerHTML += "/"
    }
}
ff.onclick = function() {
    if (!input.innerHTML.includes("%")) {
        input.innerHTML += ff.innerHTML
    }
}
x.onclick = function() {
    var textcontant = input.innerHTML;
    textcontant = textcontant.substring(0, textcontant.length - 1)
    input.innerHTML = textcontant;
    output.innerHTML = ""
}
CE.onclick = function() {
    input.innerHTML = ""
    output.innerHTML = ""
}
C.onclick = function() {
    input.innerHTML = ""
    output.innerHTML = ""
}
var result = 0
E.onclick = function() {
    var inputText = input.innerText;
    result = eval(inputText);
    output.innerHTML = result;
}
var t = document.querySelector(".t")
var tt = document.querySelector(".tt")
var ttt = document.querySelector(".ttt")
var tttt = document.querySelector(".tttt")
var body = document.querySelector("body")
var slider = document.querySelector(".slider")
var ss = document.querySelectorAll(".s")
var mm = document.querySelectorAll(".loader span")
slider.onclick = function() {
    body.classList.toggle("ddddd");
    input.classList.toggle("ddddd");
    output.classList.toggle("ddddd");
    ss.forEach(div => div.classList.toggle('ddddd'));
    t.classList.toggle("p");
    tt.classList.toggle("pp");
    ttt.classList.toggle("ppp");
    tttt.classList.toggle("pppp");
}
