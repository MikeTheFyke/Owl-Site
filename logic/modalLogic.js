var modal = document.getElementById("receiptModal");

var btn = document.getElementById("receiptButton");

var span = document.getElementByClassName("close")[0];

function openReceiptModal () {
    modal.style.display = "block";
}

function closeReceiptModal() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}