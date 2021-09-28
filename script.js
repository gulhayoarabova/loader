window.addEventListener("DOMContentLoaded", () => {
    const loader = document.querySelector(".loader")

    
    setTimeout(() => {
        loader.style.opacity = "0"
        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }, 2000);
})

// setTimeout(() => {
//     alert("hi,this is alert msg");
// }, 1000);

// setInterval(function() {
//     alert("hello");
// }, 2000);



