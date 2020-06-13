var calculateWeight = 0;
var signsSizes;
var signsType;
var strUser;
var strUser2;


function weightCalculator () {
    signsSize = document.getElementById("signsSize");
    signsType = document.getElementById("signsType");
    numberOfSigns = document.getElementById("signsNumberInput").value;

    strUser = signsSize.options[signsSize.selectedIndex].value;
    strUser2 = signsType.options[signsType.selectedIndex].value;

    if (strUser = "30X30"){
        calculateWeight = .29 * numberOfSigns;
    } 
    if (strUser = "30X45"){
        calculateWeight = .43 * numberOfSigns;
    }

    document.getElementById("totalWeight").innerHTML = calculateWeight;
}

