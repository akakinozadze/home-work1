let form12 = document.getElementById("form1");
let icon1 = document.getElementById("icon");

icon1.addEventListener("click", function() {
    form12.classList.toggle("newform");

})
let navigation1 = document.getElementById("nav1");
let bar1 = document.getElementById("burger");

bar1.addEventListener("click", function() {
    navigation1.classList.toggle("newnavigation")
} )