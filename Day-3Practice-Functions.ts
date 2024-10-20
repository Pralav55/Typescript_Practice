
//////////////////////////////////////////////////////////////////////////////////
//
//  Name                    :       Typescript Practice Functions Day - 3
//  Date                    :       20th October 2024
//  Created By              :       Pralav Phakatkar
//  Number of functions     :       5
//
//////////////////////////////////////////////////////////////////////////////////

//Write a program which accepts number from user and print even factors that numbers
//Input : 24
//Output :  2 4 6 8 12
function EvenFactors(iNo:number):void
{
    var icnt:number = 0

    for(icnt=1;icnt<=iNo/2;icnt++)
    {
        if(((icnt%2)== 0) && ((iNo%icnt)== 0))
        {
            console.log(icnt)
        }
    }
}

//Accept one character from user and check uppercase or lowercase of that character 
function Checkcharcase(iChar:string)
{
    if(((iChar.charCodeAt(0))>=65) && ((iChar.charCodeAt(0))<=90))
    {
        console.log("This is uppercase character")
    }
    else if(((iChar.charCodeAt(0))>=97) && ((iChar.charCodeAt(0))<=122))
    {
        console.log("This is lowercase character")
    }
    else
    {
        console.log("This is a special symbol")
    }
}

//String.fromCharCode(number)

//Accept one character from user and convert case of that character 
//Input : a    Output : A
//Input : D    Output : d
function convertcase(iChar:string):string
{
    var iTemp:number = iChar.charCodeAt(0)
    if(((iChar.charCodeAt(0))>=65) && ((iChar.charCodeAt(0))<=90))
    {
        iTemp = iTemp+32
        return String.fromCharCode(iTemp)
    }
    else if(((iChar.charCodeAt(0))>=97) && ((iChar.charCodeAt(0))<=122))
    {
        iTemp = iTemp-32
        return String.fromCharCode(iTemp)
    }
    else
    {
        return "invalid character"
    }
}


//Accept on character from user and  check whether that character is vowel (a,e,i,o,u) or not
//Input : E   Output : TRUE
//Input : d   Output : FALSE
function CheckVowel(iChar:string):boolean
{
    if((iChar=='a') || (iChar=='A') || (iChar=='e') || (iChar=='E') || (iChar=='i') || (iChar=='I') || (iChar=='o') || (iChar=='O') || (iChar=='u') || (iChar=='U'))
    {
        return true
    }
    else
    {
        return false
    }
}

//Write a program which accepts number from user and display its multiplication of factors
//Input  :  12
//Output : 144  (1*2*3*4*6)

//Input  : 13 
//Output : 1    (1)

//Input  : 10
//Output : 10   (1*2*5)
function multfact(iNo:number):number
{
    var icnt:number = 0
    var iMult:number = 1

    for(icnt=1;icnt<=iNo/2;icnt++)
    {
        if((iNo%icnt)==0)
        {
            iMult = iMult*icnt
        }
    }

    return iMult
}