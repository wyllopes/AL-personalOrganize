const hamburguer = document.querySelector(".hamburguer");
const navmenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {

    hamburguer.classList.toggle("active");
    navmenu.classList.toggle("active");
})

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function (){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}