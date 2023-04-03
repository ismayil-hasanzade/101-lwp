const backto = document.querySelector(".backto");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        backto.classList.add("active");
    }
    else{
        backto.classList.remove("active");
    }
})