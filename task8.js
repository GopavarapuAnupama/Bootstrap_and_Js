function f1(){
    var input1=document.getElementById("fname").value;
    if(input1.length < 5 ){
        document.getElementById("msg1").innerText="POOR";
        document.getElementById("msg1").style.color="Red";
    }
    else{
        document.getElementById("msg1").innerText="GOOD";
        document.getElementById("msg1").style.color="Green";
    }
}
function f2(){
    var input2=document.getElementById("lname").value;
    if(input2.length < 5 ){
        document.getElementById("msg2").innerText="POOR";
        document.getElementById("msg2").style.color="Red";
    }
    else{
        document.getElementById("msg2").innerText="GOOD";
        document.getElementById("msg2").style.color="Green";
    }
}
function f3(){
    var input3=document.getElementById("email").value;
    var reg1=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
    if(!input3.match(reg1)){
        document.getElementById("msg3").innerText="POOR";
        document.getElementById("msg3").style.color="Red";
    }
    else{
        document.getElementById("msg3").innerText="GOOD";
        document.getElementById("msg3").style.color="Green";
    }

}
function f4(){
    var input4=document.getElementById("pass").value;

if(input4.length<5){
document.getElementById("msg4").innerText="POOR";
document.getElementById("msg4").style.color="Red";
}
else{
 document.getElementById("msg4").innerText="GOOD";
 document.getElementById("msg4").style.color="Green";
}
}
function f5(){
    var input5=document.getElementById("repass").value;
    var input4=document.getElementById("pass").value;

if(input5.length<5){

    document.getElementById("msg5").innerText="POOR OR MISMATCH";
document.getElementById("msg5").style.color="Red";
}
else if(input5!=input4){
    document.getElementById("msg5").innerText="POOR OR MISMATCH";
document.getElementById("msg5").style.color="Red";
}
else{
    document.getElementById("msg5").innerText="GOOD";
 document.getElementById("msg5").style.color="Green"; 
}
}
function f6(){
    var input6=Number(document.getElementById("Age").value);
    if(input6>100 || input6<0){
        document.getElementById("msg6").innerText="POOR";
document.getElementById("msg6").style.color="Red";
    }
    else{
        document.getElementById("msg6").innerText="GOOD";
 document.getElementById("msg6").style.color="Green"; 
    }
}
function f7(){
var reg2= /^\d{10}$/;
var input7=document.getElementById("phone").value;
if(!input7.match(reg2)){
document.getElementById("msg7").innerText="POOR";
document.getElementById("msg7").style.color="Red";
}
else{
document.getElementById("msg7").innerText="GOOD";
 document.getElementById("msg7").style.color="Green"; 
    }
}
function f8(){
    var input8=document.getElementById("address").value;
    if(input8.length <=5 ){
        document.getElementById("msg8").innerText="POOR";
        document.getElementById("msg8").style.color="Red";
    }
    else{
        document.getElementById("msg8").innerText="GOOD";
        document.getElementById("msg8").style.color="Green";
    }
}
function f9(){
    var input9=document.getElementById("state").value;
    if(input9.length<3 ){
        document.getElementById("msg9").innerText="POOR";
        document.getElementById("msg9").style.color="Red";
    }
    else{
        document.getElementById("msg9").innerText="GOOD";
        document.getElementById("msg9").style.color="Green";
    }
}
