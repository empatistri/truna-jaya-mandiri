var header = document.getElementById("header");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        header.classList.add("warna");
    } else {
        header.classList.remove("warna");
    }
});
