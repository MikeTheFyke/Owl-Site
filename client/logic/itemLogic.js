var calculateItemWeight = 0;
var otherMaterial;
var numberOfItems;
var userSelect;

var baseUnitWeight;

var newItemWeight;

function weightCalculator2 () {
    otherMaterial = document.getElementById("otherMaterial");
    numberOfItems = document.getElementById("otherNumberInput").value;

    userSelect = otherMaterial.options[otherMaterial.selectedIndex].value;
    
    if (userSelect == "hBase"){ hBases ();}
    else if (userSelect == "centerMount"){ centerMounts ();}
    else if (userSelect == "offCenterMount"){ offCenterMounts ();}
    else if (userSelect == "tireBase"){ tireBases ();}
    else if (userSelect == "barrels"){ barrels ();}
    else if (userSelect == "windMasters"){ windMasters ();}
    else if (userSelect == "flipMasters"){ flipMasters ();}
    else if (userSelect == "aFrame"){ aFrames ();}
    else if (userSelect == "metalALeg"){ aLegs ();}
    else if (userSelect == "briteline"){ britelines ();}
    else if (userSelect == "ssPaddle"){ ssPaddles ();}

    calculateItemWeight = baseUnitWeight * numberOfItems;
    document.getElementById("materialTotalWeight").innerHTML = calculateItemWeight;
}

function itemWeightAdd () {
    newItemWeight = document.getElementById("materialTotalWeight").innerHTML;
    console.log("New Item Weight :" + newItemWeight);
    signTotalWeight += parseFloat(newItemWeight);
    document.getElementById("completeTotalWeight").innerHTML = Math.round(signTotalWeight * 100) / 100;
    receiptItems.push({
        name: userSelect,
        size: "",
        type: "",
        mount: "",
        quantity: numberOfItems,
        weight: newItemWeight
    });
    var newRow  = document.createElement("tr");
    var newName = document.createElement("td"); 
    var newSize = document.createElement("td");
    var newQuantity = document.createElement("td");
    var newWeight = document.createElement("td");
    for (receiptItem in receiptItems){
        newRow.remove();
        newName.innerHTML = receiptItems[receiptItem].name;
        newSize.innerHTML = "";
        newQuantity.innerHTML = receiptItems[receiptItem].quantity;
        newWeight.innerHTML = receiptItems[receiptItem].weight  + " lbs.";
        newRow.append(newName, newSize, newQuantity, newWeight);
        document.getElementById("newItems").appendChild(newRow);
    }
    
    console.log(receiptItems);
    document.getElementById("completeTotalWeight").innerHTML = signTotalWeight;
    document.getElementById("otherMaterial").value = "hBase";
    document.getElementById("materialTotalWeight").innerHTML = 0;
    document.getElementById("otherNumberInput").value = "";
}