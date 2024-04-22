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
    if (isValid()) {
        let rectangleLength:string = (document.getElementById("length") as HTMLInputElement).value; // gets the input from that id
        let rectangleWidth:string = (document.getElementById("width") as HTMLInputElement).value; // gets the input from that id
        // turn user input into numbers
        let lengthValue:number = parseInt(rectangleLength);
        let width:number = parseInt(rectangleWidth);

        let area:number = calculateArea(lengthValue, width);

        let perimeter:number = calculatePerimeter(lengthValue, width);

        displayResults(area, perimeter); // displays results
    }
    else {
        alert("Oops! You must enter integers only!");
    }
    
}

function isValid():boolean{
    let valid:boolean = true;
    let rectangleLength:string = (document.getElementById("length") as HTMLInputElement).value;
    let rectangleWidth:string = (document.getElementById("width") as HTMLInputElement).value;

    let length:number = parseInt(rectangleLength);
    let width:number = parseInt(rectangleWidth);

    if (!isNaN(length) && !isNaN(length)) {
        return valid;
    }
    else {
        return false;
    }
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

