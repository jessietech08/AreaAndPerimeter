// command: tsc --init

window.onload = function() {
    let processBtn = document.getElementById("process") as HTMLInputElement;
    processBtn.onclick = processClick;
    let clearBtn = document.getElementById("clearEntries") as HTMLInputElement;
    clearBtn.onclick = clearEntries;
}
/**
 * Does calculations
 */
function processClick():void{
    // splitting into two lines to avoid error
    // let rectangleBox = <HTMLInputElement>document.getElementById("length"); // gets the element by id 
    let rectangleBox:HTMLInputElement = document.getElementById("length") as HTMLInputElement; // cleaner way than above
    let rectangleLength:string = rectangleBox.value; // gets the input from that id 
    // same as rectangleBox but as a one liner
    let rectangleWidth:string = (document.getElementById("width") as HTMLInputElement).value; 


    // turn user input into numbers
    let lengthValue:number = parseInt(rectangleLength);
    let width:number = parseInt(rectangleWidth);

    let area:number = calculateArea(lengthValue, width);

    let perimeter:number = calculatePerimeter(lengthValue, width);

    displayResults(area, perimeter); // displays results
}
/**
 * this function displays the users area
 * @param area is shown in the area text box
 */

function displayResults(area:number, perimeter:number) {
    let areaTextBox:HTMLInputElement = document.getElementById("area") as HTMLInputElement;
    areaTextBox.value = area.toString();
    let perimeterTextBox:HTMLInputElement = document.getElementById("perimeter") as HTMLInputElement;
    perimeterTextBox.value = perimeter.toString();
}


/**
 * this function calculates and returns the area of a 
 * rectangle, given the length and width
 * @param l length of the rectangle
 * @param w width of the rectangle
 * @returns the area as a number
 */
function calculateArea(l:number, w:number):number {
    let area:number = l * w;
    return area;
}

/**
 * this function calculates and returns the perimeter of a 
 * rectangle, given the length and width
 * @param l length of the rectangle
 * @param w width of the rectangle
 * @returns the perimeter as a number
 */
function calculatePerimeter(l:number, w:number):number {
    let perimeter:number = (l + w) * 2;
    return perimeter;
}

/**
 * this function clears all users entries
 */
function clearEntries():void {
    let textBoxes:NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
    for (let input of textBoxes) {
        input.value = "";
    }
}

