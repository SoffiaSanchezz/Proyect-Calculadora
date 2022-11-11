function numbers(worth){
    document.getElementById('result').value += worth; 
}

function operation(){
    var opera =document.getElementById('result').value;
    if(opera ==0){
        document.getElementById('result').value = "Syntax Error"
    }
    else{
        document.getElementById('result').value = eval(opera);
    }
}

function toReset(){
    document.getElementById("result").value = " ";
}
//Modo dia noche 
function changeMode() { 
    var cuerpoweb = document.body; 
    cuerpoweb.classList.toggle("dark"); 
}