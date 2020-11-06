var modal = document.getElementById("receiptModal");

var btn = document.getElementById("receiptButton");

var span = document.getElementsByClassName("close")[0];

var receiptObjects= {};

function openReceiptModal () {
    modal.style.display = "block";
    for ( x in receiptItems ){
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