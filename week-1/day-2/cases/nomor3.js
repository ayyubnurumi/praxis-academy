// 3. Write a JavaScript conditional statement to sort three numbers. 
// Display an alert box to show the result. 
// Sample numbers : 0, -1, 4
// Output : 4, 0, -1

var a=0
var b=-1
var c=4
if(a>b && a>c)
{
    if(b>c)
    {console.log(a+","+b+","+c)}
    else
    {console.log(a+","+c+","+b)}
}
else if (b>a && b>c)
{
    if(a>c)
    {console.log(b+","+a+","+c)}
    else
    {console.log(b+","+c+","+a)}
}
else if(c>a && c>b)
{
    if(a>b)
    {console.log(c+","+a+","+b)}
    else
    {console.log(c+","+b+","+a)}
}