var modal = document.getElementById("receiptModal");

var btn = document.getElementById("receiptButton");

var span = document.getElementsByClassName("close")[0];

var receiptItems = [];

var receiptObjects= { name: "",
                      details : "",
                      weight : ""
}

function openReceiptModal () {
    modal.style.display = "block";
    for ( x in receiptObjects ){
        console.log(receiptObjects[x] + " ")
        document.getElementById("itemsList").innerHTML = receiptObjects.name + " " + receiptObjects.details + " " + receiptObjects.weight;
    }
}

function closeReceiptModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}