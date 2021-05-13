// 1 Feet = 12 inch
function inchToFeet (inch) {
    let remainder = inch % 12;
    let feet = (inch / 12) - (remainder / 12);
    let result = feet + ' Feet';
    if (remainder !== 0){
        result = feet + ' Feet, ' + remainder + ' Inch.'
    }
    return result;
}
// Testing
let feet1 = inchToFeet(288);
console.log(feet1);
let feet2 = inchToFeet(651);
console.log(feet2);
