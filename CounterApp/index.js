let num = Number(document.getElementById("lblOutput").textContent);

function updateDisplay() {
    document.getElementById("lblOutput").textContent = num; // Updates the display
}

document.getElementById("btndecrease").onclick = function() {
    num = num - 1;
    updateDisplay();
}

document.getElementById("btnincrease").onclick = function() {
    num = num + 1;
    updateDisplay();
}

document.getElementById("btnreset").onclick = function() {
    num = 0;
    updateDisplay();
}