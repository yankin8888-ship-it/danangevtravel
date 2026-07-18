console.log("Website Hoàng Anh EV Travel");
const header = document.querySelector("header");

window.addEventListener("scroll", function(){

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});
function openQR(image, title){

    document.getElementById("qrImage").src = image;
    document.getElementById("qrTitle").innerText = title;

    document.getElementById("qrModal").style.display = "flex";

}

function closeQR(){

    document.getElementById("qrModal").style.display = "none";

}

document.getElementById("qrModal").addEventListener("click", function(e){

    if(e.target === this){

        closeQR();

    }
});

function toggleLanguage() {

    const menu = document.getElementById("languageMenu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

}

window.addEventListener("click", function (e) {

    if (!e.target.closest(".language-dropdown")) {

        document.getElementById("languageMenu").style.display = "none";

    }
});
function toggleMenu(){

    document
        .getElementById("mobileMenu")
        .classList.toggle("active");

    }
// Đóng menu khi bấm ra ngoài
document.addEventListener("click", function(e){

    const menu = document.getElementById("mobileMenu");
    const button = document.querySelector(".menu-toggle");

    if(
        menu.classList.contains("active") &&
        !menu.contains(e.target) &&
        !button.contains(e.target)
    ){
        menu.classList.remove("active");
    }

});

function changeLanguage(lang){

    document.getElementById("hero-title").innerHTML =
        translations[lang].heroTitle;

    document.getElementById("hero-subtitle").innerHTML =
        translations[lang].heroSubtitle;

    document.getElementById("hero-description").innerHTML =
        translations[lang].heroDescription;

    document.getElementById("book-btn").innerHTML =
        translations[lang].book;

    document.getElementById("nav-home").innerHTML =
        translations[lang].navHome;

    document.getElementById("nav-cars").innerHTML =
        translations[lang].navCars;

    document.getElementById("nav-price").innerHTML =
        translations[lang].navPrice;

    document.getElementById("nav-contact").innerHTML =
        translations[lang].navContact;

    document.getElementById("language-text").innerHTML =
        translations[lang].language;

    document.getElementById("languageMenu").style.display = "none";
    document.getElementById("fleet-title").innerHTML =
    translations[lang].fleetTitle;

document.getElementById("fleet-subtitle").innerHTML =
    translations[lang].fleetSubtitle;
}