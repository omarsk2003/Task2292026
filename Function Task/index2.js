let arr=[5,6,9,7,8,9];
function resnum(arr)
{
 for(let i=arr.length-1;i>=0;i--)   
    {
    document.write(arr[i]);

    }
}
resnum(arr);
document.write("<br>");
let arr2=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
function oddeven(arr2)
{
for(let i=0;i<=arr2.length;i++)
{
    if(i%2==0)
        {
   console.log(arr2[i]+"is even")
        }
        else{
        console.log(arr2[i] +"is odd" );

        }
        
}
}
oddeven(arr2);

let y1=Number(prompt("enter number"));
console.log(y1);
let y2=Number(prompt("enter number"));
console.log(y2);
let y3=Number(prompt("enter number"));
console.log(y3);
let y4=Number(prompt("enter number"));
console.log(y4);
let y5=Number(prompt("enter number"));
console.log(y5);
let y6=Number(prompt("enter number"));
console.log(y6);
let arr3=[y1,y2,y3,y4,y5,y6];

function dasheven(arr3)
{

for(let i=0;i<arr3.length;i++)
{
  
      if( arr3[i]%2==0 && arr3[i-1]%2==0){
         document.write("-");
         document.write(arr3[i]);
     }
     else
         document.write(arr3[i]);
 }    
        
}

dasheven(arr3);
document.write("<br>");


let age=Number(prompt("Plese enter your age"));
console.log(age);
function Agechecker(age)
{
if (age<18)
{
    alert("The user is Minor");
}
else{
    alert("The user is Adult");
}
}
Agechecker(age);