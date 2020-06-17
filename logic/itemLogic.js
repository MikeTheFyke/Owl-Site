var calculateItemWeight = 0;
var otherMaterial;
var numberOfItems;
var userSelect;

function weightCalculator2 () {
    otherMaterial = document.getElementById("otherMaterial");
    numberOfItems = document.getElementById("otherNumberInput").value;

    userSelect = otherMaterial.options[otherMaterial.selectedIndex].value;
    
    if (userSelect = "hBase"){ hBases ();}
    if (userSelect = "centerMount"){ centerMounts ();}
    if (userSelect = "offCenterMount"){ offCenterMounts ();}
    if (userSelect = "tireBase"){ tireBases ();}
    if (userSelect = "barrels"){ barrels ();}
    if (userSelect = "windMasters"){ windMasters ();}
    if (userSelect = "flipMasters"){ flipMasters ();}
    if (userSelect = "aFrame"){ aFrames ();}
    if (userSelect = "metalALeg"){ aLegs ();}
    if (userSelect = "briteline"){ britelines ();}
    if (userSelect = "ssPaddle"){ ssPaddles ();}

    document.getElementById("materialTotalWeight").innerHTML = Math.round(calculateItemWeight);
}