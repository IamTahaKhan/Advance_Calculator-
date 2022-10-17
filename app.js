let x = document.querySelector("#a1");
function disp1(y) {
     x.value += y;

}
function cal(){
    var a = x.value;
    var b = eval(a);
    x.value = b;
}
function clear1(){
    x.value = "";
}