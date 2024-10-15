
//////////////////////////////////////////////////////////////////////////////////
//
//  Name                    :       Typescript Practice Functions Day - 1 
//  Date                    :       14th October 2024
//  Created By              :       Pralav Phakatkar
//  Number of functions     :       4
//
//////////////////////////////////////////////////////////////////////////////////

//Function to print 5 times "Marvellous " on Screen
function DisplayMarvellous(iNo:number): void
{
    var icnt:number = 0
    for(icnt=1;icnt<=iNo;icnt++)
    {
        console.log("Marvellous")
    }
}

//Program to print input number to 1 on screen
function Display(iNo:number): void
{
    var icnt:number = 0
    for(icnt=iNo;icnt>0;icnt--)
    {
        console.log(icnt)
    }
}

////Accept one Number and Check whether it is divisible by 5 or not
function Divisible(iNo:number):boolean
{
    if(iNo == 0)
    {
        return false
    }
    else if((iNo%5) == 0)
    {
        return true
    }
    else
    {
        return false
    }
} 

//Accept one number from user and print that number of * on screen
function Startprint(iNo:number):void
{
    var icnt:number = 0
    for(icnt=1;icnt<=iNo;icnt++)
    {
        console.log("*")
    }
}

