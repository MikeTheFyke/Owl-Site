var calculateWeight = 1;

var e = document.getElementById("signsSize");
var strUser = e.option[e.selectedIndex].text;

function weightCalculator () {
    document.getElementById("totalWeight").innerHTML = strUser;
}

