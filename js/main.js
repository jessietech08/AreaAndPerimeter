window.onload = function () {
    let processBtn = document.getElementById("process");
    processBtn.onclick = processClick;
};
function processClick() {
    let rectangleBox = document.getElementById("length");
    let rectangleLength = rectangleBox.value;
    let rectangleWidth = document.getElementById("width").value;
    let lengthValue = parseInt(rectangleLength);
    let width = parseInt(rectangleWidth);
    let area = calculateArea(lengthValue, width);
    displayResults(area);
}
function displayResults(area) {
    let areaTextBox = document.getElementById("area");
    areaTextBox.value = area.toString();
}
function calculateArea(l, w) {
    let area = l * w;
    return area;
}
