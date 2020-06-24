var calculatedWeight;
var signsSizes;
var signsType;
var mountedtype;
var strUser;
var strUser2;
var strUser3;
var signUnitWeight;
var mountWeight;

var signTotalWeight = 0;
var newWeight = 0;

function weightCalculator () {

    signsSize = document.getElementById("signsSize");
    signsType = document.getElementById("signsType");
    numberOfSigns = document.getElementById("signsNumberInput").value;

    strUser = signsSize.options[signsSize.selectedIndex].value;
    strUser2 = signsType.options[signsType.selectedIndex].value;
    strUser3 = mountedType.options[mountedType.selectedIndex].value

    console.log(strUser)
    console.log(strUser2)

    if (strUser == "30X30"){ signs30X30();}
    else if (strUser == "30X45"){ signs30X45();}
    else if (strUser == "30X60"){ signs30X60();}
    else if (strUser == "30X30"){ signs30X30 ();}
    else if (strUser == "30X45"){ signs30X45 ();}
    else if (strUser == "30X60"){ signs30X60 ();}
    else if (strUser == "30X90"){ signs30X90 ();}
    else if (strUser == "30X120"){ signs30X120 ();}
    else if (strUser == "45X45"){ signs45X45 ();}
    else if (strUser == "45X60"){ signs45X60 ();}
    else if (strUser == "45X75"){ signs45X75 ();}
    else if (strUser == "45X90"){ signs45X90 ();}
    else if (strUser == "60X60"){ signs60X60 ();}
    else if (strUser == "60X75"){ signs60X75 ();}
    else if (strUser == "60X90"){ signs60X90 ();}
    else if (strUser == "75X75"){ signs75X75 ();}
    else if (strUser == "75X90"){ signs75X90 ();}
    else if (strUser == "90X90"){ signs90X90 ();}
    else if (strUser == "90X120"){ signs90X120 ();}
    else if (strUser == "120X120"){ signs120X120 ();}

    if (strUser3 == "noMount"){
        mountWeight = 0;
    } else if (strUser3 == "dualMount"){
        mountWeight = 16;
    } else if (strUser3 == "singleMount"){
        mountWeight = 4;
    }

    calculatedWeight = (signUnitWeight * numberOfSigns) + (mountWeight * numberOfSigns) ;
    document.getElementById("totalWeight").innerHTML = calculatedWeight;
}

function totalWeightAdd () {
    newWeight = document.getElementById("totalWeight").innerHTML;
    console.log("New Sign Weight :" + newWeight);
    signTotalWeight += parseFloat(newWeight);
    document.getElementById("completeTotalWeight").innerHTML = signTotalWeight;
    document.getElementById("signsSize").value = "30X30";
    document.getElementById("signsType").value = ".20GA";
    document.getElementById("mountedType").value = "noMount";
    document.getElementById("totalWeight").innerHTML = 0;
    document.getElementById("signsNumberInput").value = "";
}

function totalWeightClear () {
    document.getElementById("completeTotalWeight").innerHTML = 0;
}