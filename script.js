const modeBtn = document.getElementById("mode-btn");

modeBtn.onclick = () => {

    document.body.classList.toggle("dark-mode");

};
const contactLink = document.querySelector("#contact-link");
const contactIcons = document.querySelector(".social-media");


contactLink.addEventListener("click", function(e){

    e.preventDefault();

    document.querySelector("#home").scrollIntoView({
        behavior: "smooth"
    });


    contactIcons.classList.add("glow");


    setTimeout(() => {

        contactIcons.classList.remove("glow");

    }, 1500);


});