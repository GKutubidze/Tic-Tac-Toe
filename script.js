var content;
var count=0;

function checkwin(){
    if(count==9){
        document.getElementsByClassName("header")[0].innerHTML="Draw";
        
    
    }

var x=document.getElementById("first").textContent;
var y=document.getElementById("second").textContent;
var z=document.getElementById("third").textContent;
if(x!=='' && x==y && y==z) 
{
    if(x=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
    
}

var x1=document.getElementById("fourth").textContent;
var y1=document.getElementById("fifth").textContent;
var z1=document.getElementById("sixth").textContent;
if(x1!=='' && x1==y1 && y1==z1) 
{
    if(x1=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
}

var x2=document.getElementById("seventh").textContent;
var y2=document.getElementById("eighth").textContent;
var z2=document.getElementById("ninth").textContent;
if(x2!=='' && x2==y2 && y2==z2) 
{
    if(x2=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
}

var x3=document.getElementById("first").textContent;
var y3=document.getElementById("fourth").textContent;
var z3=document.getElementById("seventh").textContent;
if(x3!=='' && x3==y3 && y3==z3) 
{
    if(x3=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
}

var x4=document.getElementById("second").textContent;
var y4=document.getElementById("fifth").textContent;
var z4=document.getElementById("eighth").textContent;
if(x4!=='' && x4==y4 && y4==z4) 
{
    if(x4=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
}

var x5=document.getElementById("third").textContent;
var y5=document.getElementById("sixth").textContent;
var z5=document.getElementById("ninth").textContent;
if(x5!=='' && x5==y5 && y5==z5) 
{
    if(x5=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
}

var x6=document.getElementById("first").textContent;
var y6=document.getElementById("fifth").textContent;
var z6=document.getElementById("ninth").textContent;
if(x6!=='' && x6==y6 && y6==z6) 
{
    if(x6=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
}
var x7=document.getElementById("third").textContent;
var y7=document.getElementById("fifth").textContent;
var z7=document.getElementById("seventh").textContent;
if(x7!=='' && x7==y7 && y7==z7) 
{
    if(x7=='X') {
        document.getElementsByClassName("header")[0].innerHTML="Player One Wins!"

        
    }
    else {
        document.getElementsByClassName("header")[0].innerHTML="Player Two Wins!"
    }
}


}


function myfunction(clicked_id){
    
     
          if ( document.getElementById(clicked_id).textContent =='') {
        
            if(content==="X"){
            document.getElementById(clicked_id).innerHTML="O";
            content="O"
            }
            else {
                document.getElementById(clicked_id).innerHTML="X";
                content="X"
            }
    
    count+=1;
    checkwin();
        }
    
        }


