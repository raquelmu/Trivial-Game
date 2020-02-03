document.addEventListener('DOMContentLoaded', (event) => {
    
    let title = document.getElementById("title");
    let boton = document.getElementById("boton");

    boton.addEventListener("click", function(){
        window.location.href="game.html"
    })


  
    function changeColor(element){

        setInterval(function(){
            if (element.classList.contains("red")){
                element.classList.add("blue");
                element.classList.remove("red")
            }
                
            else if (element.classList.contains("blue")){
                element.classList.add("green"); 
                element.classList.remove("blue")

            }
            else{
                element.classList.add("red");
                element.classList.remove("green")

            }
        }, 1000); 
        
    }

    changeColor(title);

})