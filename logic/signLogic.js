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

    if (strUser = "30X45"){
        signs30X45 ();
    }

    document.getElementById("totalWeight").innerHTML = calculateWeight;
}

function signs30X30() {
    if (strUser2 == ".20GA"){
        calculateWeight = .29 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = .58 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = .901 * numberOfSigns;
    } 
    if (strUser2 == ".081GA"){
        calculateWeight = 1.41 * numberOfSigns;
    } 
    if (strUser2 == "1.25GA"){
        calculateWeight = 1.8 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 2.65 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 1.25 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 2.25 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = .75 * numberOfSigns;
    }    
}

function signs30X45 (){
    if (strUser2 == ".20GA"){
        calculateWeight = .43 * numberOfSigns;
    }
    if (strUser2 == ".40GA"){
        calculateWeight = .86 * numberOfSigns;
    }
    if (strUser2 == ".064GA"){
        calculateWeight = 1.35 * numberOfSigns;
    }
    if (strUser2 == ".081GA"){
        calculateWeight = 1.71 * numberOfSigns;
    }
    if (strUser2 == "1.25GA"){
        calculateWeight = 2.7 * numberOfSigns;
    } 
    if (strUser2 == "16GA"){
        calculateWeight = 3.98 * numberOfSigns;
    }
    if (strUser2 == "1/2PLY"){
        calculateWeight = 1.88 * numberOfSigns;
    }
    if (strUser2 == "3/4MDO"){
        calculateWeight = 3.38 * numberOfSigns;
    }
    if (strUser2 == ".090POLY"){
        calculateWeight = .75 * numberOfSigns;
    } 
}

function signs30X60 (){
    
}

function signs30X90 (){
    
}

function signs30X120 (){
    
}

function signs45X45 (){
    
}

function signs45X60 (){
    
}

function signs45X75 (){
    
}

function signs45X90 (){
    
}

function signs60X60 (){
    
}

function signs60X75 (){
    
}

function signs60X90 (){
    
}

function signs75X75 (){
    
}

function signs75X90 (){
    
}

function signs90X90 (){
    
}
function signs90X120 (){
    
}

function signs120X120 (){
    
}