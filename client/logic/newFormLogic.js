function newSign () {
    var newWeightContainer = document.createElement("div");
    newWeightContainer.setAttribute('id','weightContainer');

    var newWeightInputContainer = document.createElement("div");
    newWeightInputContainer.setAttribute('id','weightInputContainer');
    newWeightContainer.appendChild(newWeightInputContainer);

    var newSignForm = document.createElement("form");
    newSignForm.setAttribute('onsubmit','preventDefault()');
    newSignForm.setAttribute('autocomplete','off');
    
    newWeightInputContainer.appendChild(newSignForm);

    var newLabelSignSize = document.createElement("label");
    newLabelSignSize.innerHTML = "Select sign size:";
    newLabelSignSize.setAttribute('for','signsSize');
    newSignForm.appendChild(newLabelSignSize);

    var sizeList = document.createElement("select");
    sizeList.setAttribute('name','signs');
    sizeList.setAttribute('id','signsSize');
    newSignForm.appendChild(sizeList);

    var size1 = document.createElement("option");
    size1.setAttribute('value','30X30');
    size1.setAttribute('label','30X30');
    sizeList.appendChild(size1);

    var size2 = document.createElement("option");
    size2.setAttribute('value','30X45');
    size2.setAttribute('label','30X45');
    sizeList.appendChild(size2);

    var size3 = document.createElement("option");
    size3.setAttribute('value','30X60');
    size3.setAttribute('label','30X60');
    sizeList.appendChild(size3);
    
    var size4 = document.createElement("option");
    size4.setAttribute('value','30X90');
    size4.setAttribute('label','30X90');
    sizeList.appendChild(size4);

    var size5 = document.createElement("option");
    size5.setAttribute('value','30X120');
    size5.setAttribute('label','30X120');
    sizeList.appendChild(size5);

    var size6 = document.createElement("option");
    size6.setAttribute('value','45X45');
    size6.setAttribute('label','45X45');
    sizeList.appendChild(size6);

    var size7 = document.createElement("option");
    size7.setAttribute('value','45X60');
    size7.setAttribute('label','45X60');
    sizeList.appendChild(size7);

    var size8 = document.createElement("option");
    size8.setAttribute('value','45X75');
    size8.setAttribute('label','45X75');
    sizeList.appendChild(size8);

    var size9 = document.createElement("option");
    size9.setAttribute('value','45X90');
    size9.setAttribute('label','45X90');
    sizeList.appendChild(size9);

    var size10 = document.createElement("option");
    size10.setAttribute('value','60X60');
    size10.setAttribute('label','60X60');
    sizeList.appendChild(size10);

///

    var newLabelSignType = document.createElement("label");
    newLabelSignType.innerHTML = "Select sign material:";
    newLabelSignType.setAttribute('for','signsType');
    newSignForm.appendChild(newLabelSignType);

    var typeList = document.createElement("select");
    typeList.setAttribute('name','signsType');
    typeList.setAttribute('id','signsType');
    newSignForm.appendChild(typeList);

    var type1 = document.createElement("option");
    type1.setAttribute('value','.20GA');
    type1.setAttribute('label','.20');
    typeList.appendChild(type1);

    var type2 = document.createElement("option");
    type2.setAttribute('value','.40GA');
    type2.setAttribute('label','.40');
    typeList.appendChild(type2);

    var type3 = document.createElement("option");
    type3.setAttribute('value','.064GA');
    type3.setAttribute('label','.064');
    typeList.appendChild(type3);

    var type4 = document.createElement("option");
    type4.setAttribute('value','.081GA');
    type4.setAttribute('label','.081');
    typeList.appendChild(type4);

    var type5 = document.createElement("option");
    type5.setAttribute('value','.1.25GA');
    type5.setAttribute('label','1.25');
    typeList.appendChild(type5);

    var type6 = document.createElement("option");
    type6.setAttribute('value','16GA');
    type6.setAttribute('label','16GA');
    typeList.appendChild(type6);

    var type7 = document.createElement("option");
    type7.setAttribute('value','1/2PLY');
    type7.setAttribute('label','1/2 PLY');
    typeList.appendChild(type7);

    var type8 = document.createElement("option");
    type8.setAttribute('value','3/4MDO');
    type8.setAttribute('label','3/4 MDO');
    typeList.appendChild(type8);

    var type9 = document.createElement("option");
    type9.setAttribute('value','.090POLY');
    type9.setAttribute('label','.090 POLY');
    typeList.appendChild(type9);
/// WEIGHT INPUT
    var newSignsNumberInput = document.createElement("input");
    newSignsNumberInput.setAttribute('id','signsNumberInput');
    newSignsNumberInput.setAttribute('placeholder',"Enter amount of signs");
    newSignForm.appendChild(newSignsNumberInput);

    var newSubmitButton = document.createElement("button");
    newSubmitButton.setAttribute('id','submitButton');
    newSubmitButton.innerHTML = "SUBMIT";
    newSubmitButton.setAttribute('onclick','weightCalculator()');
    newSignForm.appendChild(newSubmitButton);

/// WEIGHT OUTPUT
    var newWeightOutputContainer = document.createElement("div");
    newWeightOutputContainer.setAttribute('id','weightOutputContainer');
    newWeightContainer.appendChild(newWeightOutputContainer);

    var newtotalWeightText = document.createElement("h1");
    newtotalWeightText.setAttribute('id','totalWeightText');
    newtotalWeightText.innerHTML = "Lbs.";
    newWeightOutputContainer.appendChild(newtotalWeightText);

    var newtotalWeight = document.createElement("h1");
    newtotalWeight.setAttribute('id','totalWeight');
    newtotalWeight.innerHTML = "0";
    newWeightOutputContainer.appendChild(newtotalWeight);

/// PLUS CONTAINER
    var newPlusContainer = document.createElement("div");
    newPlusContainer.setAttribute('id','plusContainer');

    var newPlusButton = document.createElement("button");
    newPlusButton.setAttribute('id','plusSign');
    newPlusButton.setAttribute('onclick','newSign()');
    newPlusButton.innerHTML = "+";
    newPlusContainer.appendChild(newPlusButton);

    document.body.appendChild(newWeightContainer);
    document.body.appendChild(newPlusContainer);
}