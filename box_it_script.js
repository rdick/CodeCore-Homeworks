//Homework #1.
// First homework assignment at Code Core College

//draw line
const drawline = (num, ) => {
    if(num === 1) {
        return '\u{2501}'
    } else {
        return '\u{2501}' + drawline(num-1)
    }
    
}
// draw top border
const drawTopBorder = (num) => {
    return '\u{250F}' + drawline(num) + '\u{2513}'
}

//draw middle border
const drawMiddleBorder = (num) => {
    return '\u{2523}' + drawline(num) + '\u{252B}'
}

//draw bottom border
const drawBottomBorder = (num) => {
    return '\u{2517}' +drawline(num) + '\u{251B}'
}

// create spaces after name
const spacesAfter = (string, maxArrayLength) => {
    let spaces = maxArrayLength - string.length
    let totalSpaces = ""

    for(let i=0; i < spaces; i++) {
        totalSpaces += " "
    }
    return string + totalSpaces
}

//draw bars around name
const drawBarsAround = (str) => {
    return '\u{2503}' + str + '\u{2503}'
}

//actual programming

let arr = process.argv.slice(2)
if (arr.length === 0) {
    console.log(
        '\u{250F}' + '\u{2513}' + `\n` + 
        '\u{2517}' + '\u{251B}')
}
let max = 0

// find max string length
for(let i = 0; i < arr.length; i++) {
    max = Math.max(max, arr[i].length)
}

// Creating Box
for(let i = 0; i < arr.length; i++) {
    //Draw Top Border
    if(i === 0) {
        console.log(drawTopBorder(max))
    }
    //Draw String with Spaces and Bars Around it
       console.log(drawBarsAround(spacesAfter(arr[i], max)))
       
    // Draw Bottom Border
    if(i == arr.length-1) {
        console.log(drawBottomBorder(max))
        break
    }
    // Draw Middle Border
        console.log(drawMiddleBorder(max))
}