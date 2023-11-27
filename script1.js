var egg = 0;
const pat = document.getElementById("pescador")
const b1 = document.getElementById("barata1");
function ranint(max){
    return(parseInt(Math.random()*max))
}
function abrir(){
    egg = ranint(5)
    console.log(egg)
    if (egg == 1){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 2){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 3){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 4){
        window.open("https://www.youtube.com", "_self")
    }
    else if (egg == 0){
        window.open("https://www.youtube.com", "_self")
    }
}
function pesca(){
    var s = 0; 
}
function baratinha(){
    
    var visi = ranint(2)
    egg = visi
    console.log(visi)
    if (visi == 0){
        b1.style.opacity = 0;
    }
    else{
        b1.style.opacity = 255;
        console.log("certo")
        
    }
    
}
b1.addEventListener("click", () => abrir());
baratinha();