var calculatedWeight;
var signsSizes;
var signsType;
var strUser;
var strUser2;

var totalWeight = 0;
var newWeight = 0;

function weightCalculator () {
    signsSize = document.getElementById("signsSize");
    signsType = document.getElementById("signsType");
    numberOfSigns = document.getElementById("signsNumberInput").value;

    strUser = signsSize.options[signsSize.selectedIndex].value;
    strUser2 = signsType.options[signsType.selectedIndex].value;

    console.log(strUser)
    console.log(strUser2)

/// 30X30 LOGIC
    if (strUser = "30X30" && strUser2 == ".20GA"){ 
        calculatedWeight = 0.29 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == ".40GA"){ 
        calculatedWeight = .58 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == ".064GA"){ 
        calculatedWeight = .901 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == ".081GA"){ 
        calculatedWeight = 1.41 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == "1.25GA"){ 
        calculatedWeight = 1.8 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == "16GA"){ 
        calculatedWeight = 2.65 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == "1/2POLY"){ 
        calculatedWeight = 1.25 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == "3/4MDO"){ 
        calculatedWeight = 2.25 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X30" && strUser2 == ".090POLY"){ 
        calculatedWeight = .75 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
/// 30X45 LOGIC
    if (strUser = "30X45"){ 

    }
/// 30X60 LOGIC
    if (strUser = "30X60"){ 

    }
/// 30X90 LOGIC
    if (strUser = "30X90"){ 

    }
/// 30X120 LOGIC
    if (strUser = "30X120"){ 

    }
/// 45X45 LOGIC
    if (strUser = "45X45"){ 

    }
/// 45X60 LOGIC
    if (strUser = "45X60"){ 

    }
/// 45X75 LOGIC
    if (strUser = "45X75"){ 

    }
/// 45X90 LOGIC
    if (strUser = "45X90"){ 

    }
/// 60X60 LOGIC
    if (strUser = "60X60"){ 

    }
/// 60X75 LOGIC
    if (strUser = "60X75"){ 

    }
/// 60X90 LOGIC
    if (strUser = "60X90"){ 

    }
/// 75X75 LOGIC
    if (strUser = "75X75"){ 

    }
/// 75X90 LOGIC
    if (strUser = "75X90"){ 

    }
/// 90X90 LOGIC
    if (strUser = "90X90"){ 

    }
/// 90X120 LOGIC
    if (strUser = "90X120"){ 

    }
/// 120X120 LOGIC
    if (strUser = "120X120"){ 

    }
}

function totalWeightAdd () {
    newWeight = document.getElementById("totalWeight").innerHTML;
    console.log("New Sign Weight :" + newWeight);
    totalWeight += parseFloat(newWeight);
    document.getElementById("completeTotalWeight").innerHTML = totalWeight;
    document.getElementById("signsSize").value = "30X30";
    document.getElementById("signsType").value = ".20GA";
    document.getElementById("totalWeight").innerHTML = 0;
    document.getElementById("signsNumberInput").value = "";
}

function totalWeightClear () {
    document.getElementById("completeTotalWeight").innerHTML = 0;
}