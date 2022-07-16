// 8. According to Wikipedia a happy number is defined by the following process :
// "Starting with any positive integer, 
// replace the number by the sum of the squares of its digits, 
// and repeat the process until the number equals 1 (where it will stay), 
// or it loops endlessly in a cycle which does not include 1. 
// Those numbers for which this process ends in 1 are happy numbers, 
// while those that do not end in 1 are unhappy numbers (or sad numbers)".
// Write a JavaScript program to find and print the first 5 happy numbers.

function happy_number(num)
{
    var m,n ;
    var c= [] ;

    while(num !=1 && c[num] !== true)
    {
        c[num] = true ;
        m = 0 ;
        while (num>0) {
            n = num % 10 ;
            m += n * n ;
            num = (num -n) / 10 ;
        }
        num = m ;
    }
    return (num == 1) ;
}

var cnt = 5 ;
var num = 1 ;
var f5 = '' ;
while(cnt-- > 0)
{
    while(!happy_number(num))
    num++ ;
    f5 = f5+(num + ", ") ;
    num++ ;
}
console.log('First 5 happy nubers ara : '+f5);