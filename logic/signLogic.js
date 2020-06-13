var calculateWeight = 1;
var e;
var strUser;


function weightCalculator () {
    e = document.getElementById("signsSize");
    strUser = e.options[e.selectedIndex].value;
    document.getElementById("totalWeight").innerHTML = strUser;
}

