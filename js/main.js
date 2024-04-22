window.onload = function () {
    let processBtn = document.getElementById("process");
    processBtn.onclick = processClick;
    let clearBtn = document.getElementById("clearEntries");
    clearBtn.onclick = clearEntries;
};
function processClick() {
    if (isValid()) {
        let rectangleLength = document.getElementById("length").value;
        let rectangleWidth = document.getElementById("width").value;
        let lengthValue = parseInt(rectangleLength);
        let width = parseInt(rectangleWidth);
        let area = calculateArea(lengthValue, width);
        let perimeter = calculatePerimeter(lengthValue, width);
        displayResults(area, perimeter);
    }
    else {
        alert("Oops! You must enter integers only!");
    }
}
function isValid() {
    let valid = true;
    let rectangleLength = document.getElementById("length").value;
    let rectangleWidth = document.getElementById("width").value;
    let length = parseInt(rectangleLength);
    let width = parseInt(rectangleWidth);
    if (!isNaN(length) && !isNaN(length)) {
        return valid;
    }
    else {
        return false;
    }
}
function displayResults(area, perimeter) {
    let areaTextBox = document.getElementById("area");
    areaTextBox.value = area.toString();
    let perimeterTextBox = document.getElementById("perimeter");
    perimeterTextBox.value = perimeter.toString();
}
function calculateArea(l, w) {
    let area = l * w;
    return area;
}
function calculatePerimeter(l, w) {
    let perimeter = (l + w) * 2;
    return perimeter;
}
function clearEntries() {
    let textBoxes = document.querySelectorAll("input");
    for (let input of textBoxes) {
        input.value = "";
    }
}
