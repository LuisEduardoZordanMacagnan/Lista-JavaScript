var num="";

var v = document.getElementById('visor');

function inputCalc(element){ 
    num = num+element.innerHTML
    v.innerHTML=num;
}

function resulado(){
    num = eval(num);
    v.innerHTML = num;
    num="";
}