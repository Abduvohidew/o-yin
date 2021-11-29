var yugur = document.querySelector(".runner") 
document.addEventListener("keydown", (e) =>{ 
    if (e.code == "ArrowUp") { 
        yugur.setAttribute("style", "bottom: 150px; transition: 0.7s;"); 
        setTimeout(() => { 
            yugur.setAttribute("style", "bottom: 50px; transition: 0.7s;"); 
        }, 800); 
    } 
})