// Leap Year checker
function leapYear (year) {
    const remainder = year % 4;
    if (remainder == 0) {
        if(year == 1700 || year == 1800 || year == 1900 || year == 2021){
            return 'This is not leap year.';
        } else{
            return 'This is leap year.';
        }
    } else {
        return 'This is not leap year.';
    }
}

// Testing
const thisYear = leapYear(1700);
console.log(thisYear);