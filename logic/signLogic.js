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
        signs30X30();
    }

    if (strUser = "30X45" && strUser2 == ".20GA"){
        calculateWeight = .43 * numberOfSigns;
    }

    document.getElementById("totalWeight").innerHTML = calculateWeight;
}

function signs30X30() {
    if (strUser = "30X30" && strUser2 == ".20GA"){
        calculateWeight = .29 * numberOfSigns;
    }
    if (strUser = "30X30" && strUser2 == ".40GA"){
        calculateWeight = .58 * numberOfSigns;
    } 
}