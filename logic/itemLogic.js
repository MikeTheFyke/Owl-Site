var calculateItemWeight = 0;
var itemType;
var numerOfItems;
var userSelect;

function weightCalculator2 () {
    itemType = document.getElementById("otherMaterial");
    numberOfItems = document.getElementById("otherNumberInput").value;
    userSelect = otherMaterial.options[otherMaterial.selectedIndex].value;

    if (userSelect = "hBase"){ hBases();}
    if (userSelect = "centerMount"){ centerMount();}
    if (userSelect = "offCenterMount"){ offCenterMount();}
    if (userSelect = "tireBase"){ tireBase();}
    if (userSelect = "barrels"){ barrels();}
    if (userSelect = "windMasters"){ windMasters();}
    if (userSelect = "flipMasters"){ flipMasters();}
    if (userSelect = "aFrame"){ aFrame();}
    if (userSelect = "metalALeg"){ aLeg();}
    if (userSelect = "briteline"){ briteline();}

    document.getElementById("materialTotalWeight").innerHTML = Math.round(calculateItemWeight);
}

function hBases (){
    calculateItemWeight = 28 * numberOfItems;
}

function centerMount (){
    calculateItemWeight = 16 * numberOfItems;
}

function offCenterMount (){
    calculateItemWeight = 16 * numberOfItems;
}

function tireBase (){
    calculateItemWeight = 20.8 * numberOfItems;
}

function barrels (){
    calculateItemWeight = 3.64 * numberOfItems;
}

function windMasters (){
    calculateItemWeight = 32 * numberOfItems;
}

function flipMasters (){
    calculateItemWeight = 24 * numberOfItems;
}

function aFrame (){
    calculateItemWeight = 22 * numberOfItems;
}

function aLeg (){
    calculateItemWeight = 8 * numberOfItems;
}

function briteline (){
    calculateItemWeight = 42 * numberOfItems;
}