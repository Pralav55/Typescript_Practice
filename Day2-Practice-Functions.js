//////////////////////////////////////////////////////////////////////////////////
//
//  Name                    :       Typescript Practice Functions Day - 2
//  Date                    :       15th October 2024
//  Created By              :       Pralav Phakatkar
//  Number of functions     :       4
//
//////////////////////////////////////////////////////////////////////////////////
//Accept on number from user if number is less than 10 then print "Hello " otherwise print "Demo".
function Print(iNo) {
    if (iNo <= 10) {
        console.log("Hello");
    }
    else {
        console.log("Demo");
    }
}
//Accept two numbers from user and display first number in second number of times
//Input :  12  5
//output :  12 12 12 12 12
function Display(Value, iNo) {
    var icnt = 0;
    for (icnt = 1; icnt <= iNo; icnt++) {
        console.log(Value);
    }
}
//Accept number from user and check whetther number is even or odd
function EvenOdd(iNo) {
    if (iNo % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
//Program which accepts one number from user and print that number of even numbers on screen
//Input  7
//Output  2 4 6 8 10 12 14
function printEven(iNo) {
    if (iNo <= 0) {
        return;
    }
    var icnt = 0;
    for (icnt = 1; icnt <= (iNo * 2); icnt++) {
        if (icnt % 2 == 0) {
            console.log(icnt);
        }
    }
}
