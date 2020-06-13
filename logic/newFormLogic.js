function newSign () {
    var newWeightContainer = document.createElement("div");
    newWeightContainer.setAttribute('id','weightContainer');

    var newWeightInputContainer = document.createElement("div");
    newWeightInputContainer.setAttribute('id','weightInputContainer');

    var newSignForm = document.createElement("form");
    newSignForm.setAttribute('onsubmit','preventDefault()');
    newSignForm.setAttribute('autocomplete','off');

    var sizeList = document.createElement("select");
    sizeList.setAttribute('name','signs');
    sizeList.setAttribute('id','signsSize');

    var size1 = document.createElement("option");
    size1.setAttribute('value','30X30');
    size1.setAttribute('label','30X30');

    var size2 = document.createElement("option");
    size2.setAttribute('value','30X45');
    size2.setAttribute('label','30X45');

    sizeList.appendChild(size1);
    sizeList.appendChild(size2);
    newSignForm.appendChild(sizeList);
    newWeightInputContainer.appendChild(newSignForm);
    newWeightContainer.appendChild(newWeightInputContainer);
    
    document.body.appendChild(newWeightContainer);
}