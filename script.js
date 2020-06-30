var input = document.getElementById("input");

var wrong = document.getElementById("wrong");

window.parent.postMessage({
            name: "hideNext"
        }, "*");
        

input.addEventListener("change",function(){
    
    var str = input.value.replace(/\s+/g, '');

    if(input.value!=="Mike"){
        
        window.parent.postMessage({
            name: "nextPage"
        }, "*");
        
        wrong.innerHTML = "";
       
       }else{
           
           wrong.innerHTML = "¿Mike? ¿Qué clase de nombre genérico es ese? Anda, prueba otra vez."
           
       }
    
})

    
