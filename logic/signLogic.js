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

    if (strUser = "30X30"){ signs30X30 ();}
    if (strUser = "30X45"){ signs30X45 ();}
    if (strUser = "30X60"){ signs30X60 ();}
    if (strUser = "30X90"){ signs30X90 ();}
    if (strUser = "30X120"){ signs30X120 ();}
    if (strUser = "45X45"){ signs45X45 ();}
    if (strUser = "45X60"){ signs45X60 ();}
    if (strUser = "45X75"){ signs45X75 ();}
    if (strUser = "45X90"){ signs45X90 ();}
    if (strUser = "60X60"){ signs60X60 ();}
    if (strUser = "60X75"){ signs60X75 ();}
    if (strUser = "60X90"){ signs60X90 ();}
    if (strUser = "75X75"){ signs75X75 ();}
    if (strUser = "75X90"){ signs75X90 ();}
    if (strUser = "90X90"){ signs90X90 ();}
    if (strUser = "90X120"){ signs90X120 ();}
    if (strUser = "120X120"){ signs120X120 ();}
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