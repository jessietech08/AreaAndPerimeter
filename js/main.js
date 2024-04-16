window.onload = function () {
    let processBtn = document.getElementById("process");
    processBtn.onclick = processClick;
    let clearBtn = document.getElementById("clearEntries");
    clearBtn.onclick = clearEntries;
};
function processClick() {
    let rectangleBox = document.getElementById("length");
    let rectangleLength = rectangleBox.value;
    let rectangleWidth = document.getElementById("width").value;
    let lengthValue = parseInt(rectangleLength);
    let width = parseInt(rectangleWidth);
    let area = calculateArea(lengthValue, width);
    let perimeter = calculatePerimeter(lengthValue, width);
    displayResults(area, perimeter);
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
