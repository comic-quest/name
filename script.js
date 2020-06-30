var input = document.getElementById("input");

var wrong = document.getElementById("wrong");

window.parent.postMessage({
            name: "hideNext"
        }, "*");
        

input.addEventListener("change",function(){
    
    var str = input.value.replace(/\s+/g, '');

    if(input.value!=="Mike"){
        
        if(!str){
           
           wrong.innerHTML = "Venga ya, al menos escribe algo."
            
            window.parent.postMessage({
            name: "hideNext"
        }, "*");
           
           }else{
           
           window.parent.postMessage({
            name: "nextPage"
        }, "*");
        
        wrong.innerHTML = "";
           
           }
        
        
       
       }else{
           
           wrong.innerHTML = "¿Mike? ¿Qué clase de nombre genérico es ese? Anda, prueba otra vez."
           
           window.parent.postMessage({
            name: "hideNext"
        }, "*");
           
       }
    
})

    
