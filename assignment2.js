
//Task 1 Calculator

function fun()
{
var x=document.getElementById("num1").value;
var y=document.getElementById("num2").value;
var o=document.getElementById("op").value;

if(o ==='+')
{

document.getElementById("result").innerHTML="Result is "+ add(x,y);
}
else if(o === '-')
{
document.getElementById("result").innerHTML="Result is "+ sub(x,y);
}

else if(o === '*')
{
document.getElementById("result").innerHTML="Result is "+ mul(x,y);
}
else if(o === '/')
{
document.getElementById("result").innerHTML="Result is "+ div(x,y);
}

else if(o === '%')
{
document.getElementById("result").innerHTML="Result is "+ percentage(x,y);
}
else if(o==='abs')
{ 
document.getElementById("result").innerHTML="Result is "+ absolute(x);
}
else if(o==='sqrt')
{ 
document.getElementById("result").innerHTML="Result is "+ sqr(x);
}

}


function add(num1,num2)
{
var z=parseInt(num1)+parseInt(num2);
 return z;
}

function sub(num1,num2)
{
var z=parseInt(num1)-parseInt(num2);
 return z;
}
function mul(num1,num2)
{
var z=parseInt(num1)*parseInt(num2);
 return z;
}
function div(num1,num2)
{
var z=parseInt(num1)/parseInt(num2);
 return z;
}
function percentage(num1,num2)
{
var z=(parseInt(num1)/100)*parseInt(num2);
 return z;
}

function absolute(num)
{
var z=-(parseInt(num));
 return z;
}
function sqr(num)
{
z= Math.sqrt(parseInt(num));
return z;
}

//end of calculation function


//Form Validation function
function validateForm()
    {     
        var namereg=/^[a-zA-Z]+$/;
        var phonereg = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        var mailreg =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


         var name=document.getElementById('fname').value;
        var pno=document.getElementById('no').value;
        var email1=document.getElementById('mail').value;


        if(name == '' || pno=='' || email1=='')
        {
            alert("All fields are  mandatory");
            return false;
        }

      else if(!(name.match(namereg)))
      {
        alert("Name field must contain only alphabets");
          return false; 
      }
      else if(!(pno.match(phonereg)))
      {
        alert("Phone Number must be 10 digits"); 
          return false;    
      }
      else if(!(email1.match(mailreg)))
      {
        alert("Invalid Email"); 
         return false;     
      }
      else
      {
      return true;
    }
}



//JavaScript function that checks whether string is palindrome or not

function palindrome()
   {   
       var  str1=document.getElementById("stringi").value;
    
       var str2 = str1.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
        var count = 0;

 
        
        if ((str2.length) % 2 === 0) {
            count = (str2.length) / 2;
        }
        
        else
        {
   
            if (str2.length === 1)
             {
                
                document.getElementById("result1").innerHTML="The string you entered is a Palindrome"
                return true;
            } 
            
            else 
            {
                 count = (str2.length - 1) / 2;
                for (i = 0; i < count; i++)
               {

                 if (str2[i] != str2.slice(-1-i)[0]) 
                 {
                    document.getElementById("result1").innerHTML="The string you enterd is not a Palindrome";
                    return false;
                  }
                }
            }
        
             document.getElementById("result1").innerHTML="The string you enterd is a Palindrome";
             return true;
      
       }
}

 
//End of Pallindrome function


//Task 3 Function to check Anagram



function anagram()
{
    str1=document.getElementById("string1").value;
    str2=document.getElementById("string2").value;


     s1 = str1.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');
     s2= str2.toLowerCase().replace(/[^a-zA-Z0-9]+/g,'');

  s1=s1.split('').sort().join('');
  s2=s2.split('').sort().join('');

  if(s1 === s2)
  {
    //console.log("True");
    document.getElementById("result2").innerHTML="Yes it is an anagram";
    return true;  
 
  }
  else
  {
    //console.log("False");
    document.getElementById("result2").innerHTML="It is not an anagram";
    return false;
  }


}



/*  Task 4 
Who will Survive  {0:Human
                     1:cockroach
                      2:Nuclear Bomb }*/
  

    function start1()
    {

    
     p=Math.floor(Math.random() * 1001);
     q=Math.floor(Math.random() * 1001);


    document.getElementById("no1").value=p;
    document.getElementById("no2").value=q;
 /*Mapping  random numbers generated { 0 corresponds to 1  (cockroach)
                                      even numbers corresponds to  0(Human)
                                    odd numbers corresponds to 2(Nuclear bomb)} */

 
  if(p===0)
  {
      obj1=1;
  }  

else if(p%2 === 0)
{
    obj1=0;
}
else 
{
    obj1=2;
}



 /*Mapping  random numbers generated { 0 corresponds to 0  (Human)
                                      even numbers corresponds to  2(Nuclear Bomb)
                                    odd numbers corresponds to 1 (cockroach)} */


if(q===0)
{
    obj2=0;
}  

else if(q%2 === 0)
{
  obj2=2;
}
else 
{
  obj2=1;
}



if((obj1===0 &&  obj2===1) || (obj1===1 &&  obj2===0))
{  
    document.getElementById("result").innerHTML="Human survives"
    return "Human survives"
}



else if((obj1===1 &&  obj2===2)||(obj1===2 &&  obj2===1))
{  
    document.getElementById("result").innerHTML=" Cockroach survives"
    return "Cockroach survives"
}
  
else if((obj1===0 &&  obj2===2)||(obj1===2 &&  obj2===0))
{  
    document.getElementById("result").innerHTML="Human dies"
    return "Human dies"
}
else if((obj1===0 && obj2===0) || (obj1===1 && obj2===1) || ( obj1===2 && obj2===2))
{
    document.getElementById("result").innerHTML="Tie"
    return "Tie"
}
    

}



