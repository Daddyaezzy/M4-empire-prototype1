var nav = document.getElementById("nav");

        function showMenu(){
            nav.style.display = "block"
        }
        function hideMenu(){
            nav.style.display = "none"
        }


const nav = document.getElementById("nav")

window.onscroll = function(){ 
    if(document.body.scrollTop>=150)
    {nav.classList.add("colorNav")
}

    else{nav.classList.remove("colorNav")}
}

