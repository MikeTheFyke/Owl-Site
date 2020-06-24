var calculateItemWeight = 0;
var otherMaterial;
var numberOfItems;
var userSelect;

function weightCalculator2 () {
    otherMaterial = document.getElementById("otherMaterial");
    numberOfItems = document.getElementById("otherNumberInput").value;

    userSelect = otherMaterial.options[otherMaterial.selectedIndex].value;
    
    if (userSelect = "hBase"){ hBases ();}
    else if (userSelect = "centerMount"){ centerMounts ();}
    else if (userSelect = "offCenterMount"){ offCenterMounts ();}
    else if (userSelect = "tireBase"){ tireBases ();}
    else if (userSelect = "barrels"){ barrels ();}
    else if (userSelect = "windMasters"){ windMasters ();}
    else if (userSelect = "flipMasters"){ flipMasters ();}
    else if (userSelect = "aFrame"){ aFrames ();}
    else if (userSelect = "metalALeg"){ aLegs ();}
    else if (userSelect = "briteline"){ britelines ();}
    else if (userSelect = "ssPaddle"){ ssPaddles ();}

    calculateItemWeight = baseUnitWeight * numberOfItems;
    document.getElementById("materialTotalWeight").innerHTML = Math.round(calculateItemWeight);
}