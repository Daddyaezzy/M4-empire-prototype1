var nav = document.getElementById("nav");

function showMenu(){
    nav.style.display = "block"
}
function hideMenu(){
    nav.style.display = "none"
}

var navContainer = document.querySelector('.navContainer')



window.onscroll = function(){ 
    if (document.documentElement.scrollTop > 550) {
        navContainer.classList.add("colorNav")
        console.log(50)
    }

    else{navContainer.classList.remove("colorNav")}
}

