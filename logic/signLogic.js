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
    if (strUser = "30X30" && strUser2 == "1/2PLY"){ 
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
    if (strUser = "30X45" && strUser2 == ".20GA"){
        calculatedWeight = .43 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X45" && strUser2 == ".40GA"){
        calculatedWeight = .86 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X45" && strUser2 == ".064GA"){
        calculatedWeight = 1.35 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X45" && strUser2 == ".081GA"){
        calculatedWeight = 1.71 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X45" && strUser2 == "1.25GA"){
        calculatedWeight = 2.7 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
    if (strUser = "30X45" && strUser2 == "16GA"){
        calculatedWeight = 3.98 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X45" && strUser2 == "1/2PLY"){
        calculatedWeight = 1.88 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X45" && strUser2 == "3/4MDO"){
        calculatedWeight = 3.38 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X45" && strUser2 == ".090POLY"){
        calculatedWeight = .75 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
/// 30X60 LOGIC
    if (strUser = "30X60" && strUser2 == ".20GA"){
        calculatedWeight = .58 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X60" && strUser2 == ".40GA"){
        calculatedWeight = 1.15 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X60" && strUser2 == ".064GA"){
        calculatedWeight = 1.8 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X60" && strUser2 == ".081GA"){
        calculatedWeight = 2.26 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X60" && strUser2 == "1.25GA"){
        calculatedWeight = 3.6 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
    if (strUser = "30X60" && strUser2 == "16GA"){
        calculatedWeight = 5.3 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X60" && strUser2 == "1/2PLY"){
        calculatedWeight = 2.5 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X60" && strUser2 == "3/4MDO"){
        calculatedWeight = 4.5 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X60" && strUser2 == ".090POLY"){
        calculatedWeight = 1 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
/// 30X90 LOGIC
    if (strUser = "30X90" && strUser2 == ".20GA"){
        calculatedWeight = .36 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X90" && strUser2 == ".40GA"){
        calculatedWeight = 1.73 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X90" && strUser2 == ".064GA"){
        calculatedWeight = 2.7 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X90" && strUser2 == ".081GA"){
        calculatedWeight = 3.42 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X90" && strUser2 == "1.25GA"){
        calculatedWeight = 5.4 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
    if (strUser = "30X90" && strUser2 == "16GA"){
        calculatedWeight = 7.9 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X90" && strUser2 == "1/2PLY"){
        calculatedWeight = 3.75 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X90" && strUser2 == "3/4MDO"){
        calculatedWeight = 6.75 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X90" && strUser2 == ".090POLY"){
        calculatedWeight = 1.5 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
/// 30X120 LOGIC
    if (strUser = "30X120" && strUser2 == ".20GA"){
        calculatedWeight = 1.15 * numberOfSigns;
        console.log(calculatedWeight)
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X120" && strUser2 == ".40GA"){
        calculatedWeight = 2.3 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X120" && strUser2 == ".064GA"){
        calculatedWeight = 3.63 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X120" && strUser2 == ".081GA"){
        calculatedWeight = 4.6 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X120" && strUser2 == "1.25GA"){
        calculatedWeight = 7.2 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
    if (strUser = "30X120" && strUser2 == "16GA"){
        calculatedWeight = 10.92 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X120" && strUser2 == "1/2PLY"){
        calculatedWeight = 5 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X120" && strUser2 == "3/4MDO"){
        calculatedWeight = 9 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "30X120" && strUser2 == ".090POLY"){
        calculatedWeight = 2 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
/// 45X45 LOGIC
    if (strUser = "45X45" && strUser2 == ".20GA"){
        calculatedWeight = .65 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X45" && strUser2 == ".40GA"){
        calculatedWeight = 1.3 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X45" && strUser2 == ".064GA"){
        calculatedWeight = 2.03 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X45" && strUser2 == ".081GA"){
        calculatedWeight = 2.57 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X45" && strUser2 == "1.25GA"){
        calculatedWeight = 4.05 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
    if (strUser = "45X45" && strUser2 == "16GA"){
        calculatedWeight = 5.96 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X45" && strUser2 == "1/2PLY"){
        calculatedWeight = 2.81 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X45" && strUser2 == "3/4MDO"){
        calculatedWeight = 5.06 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X45" && strUser2 == ".090POLY"){
        calculatedWeight = 1.13 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
/// 45X60 LOGIC
    if (strUser = "45X60" && strUser2 == ".20GA"){
        calculatedWeight = .85 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X60" && strUser2 == ".40GA"){
        calculatedWeight = 1.73 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X60" && strUser2 == ".064GA"){
        calculatedWeight = 2.7 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X60" && strUser2 == ".081GA"){
        calculatedWeight = 3.42 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X60" && strUser2 == "1.25GA"){
        calculatedWeight = 5.4 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
    if (strUser = "45X60" && strUser2 == "16GA"){
        calculatedWeight = 7.9 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X60" && strUser2 == "1/2PLY"){
        calculatedWeight = 3.75 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X60" && strUser2 == "3/4MDO"){
        calculatedWeight = 6.75 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "45X60" && strUser2 == ".090POLY"){
        calculatedWeight = 1.5 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
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
    if (strUser = "120X120" && strUser2 == ".20GA"){
        calculatedWeight = 4.61 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "120X120" && strUser2 == ".40GA"){
        calculatedWeight = 9.22 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "120X120" && strUser2 == ".064GA"){
        calculatedWeight = 14.14 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "120X120" && strUser2 == ".081GA"){
        calculatedWeight = 18.26 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "120X120" && strUser2 == "1.25GA"){
        calculatedWeight = 28.8 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    } 
    if (strUser = "120X120" && strUser2 == "16GA"){
        calculatedWeight = 42.4 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "120X120" && strUser2 == "1/2PLY"){
        calculatedWeight = 20 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "120X120" && strUser2 == "3/4MDO"){
        calculatedWeight = 36 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
    }
    if (strUser = "120X120" && strUser2 == ".090POLY"){
        calculatedWeight = 8 * numberOfSigns;
        document.getElementById("totalWeight").innerHTML = calculatedWeight;
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