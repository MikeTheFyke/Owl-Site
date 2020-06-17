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