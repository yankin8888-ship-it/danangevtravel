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

    console.log("hero-title", document.getElementById("hero-title"));
    console.log("service1", document.getElementById("service1"));
    console.log("service2", document.getElementById("service2"));
    console.log("service3", document.getElementById("service3"));
    console.log("hero-description", document.getElementById("hero-description"));

    document.getElementById("hero-title").innerHTML =
        translations[lang].heroTitle;

    document.getElementById("service1").innerHTML =
        translations[lang].service1;

    document.getElementById("service2").innerHTML =
        translations[lang].service2;

    document.getElementById("service3").innerHTML =
        translations[lang].service3;

    document.getElementById("hero-description").innerHTML =
        translations[lang].heroDescription;

    const navHome = document.getElementById("nav-home");
console.log(navHome);
        console.log(document.getElementById("nav-home"));
console.log(document.getElementById("nav-cars"));
console.log(document.getElementById("nav-price"));
console.log(document.getElementById("nav-contact"));

    

if (navHome) {
    navHome.innerHTML = translations[lang].navHome;
}
        const navAirport = document.getElementById("nav-airport");
console.log("nav-airport =", navAirport);

if (navAirport) {
    navAirport.innerHTML = translations[lang].navAirport;
}

const navCars = document.getElementById("nav-cars");
if (navCars) {
    navCars.innerHTML = translations[lang].navCars;
}

const navPrice = document.getElementById("nav-price");
if (navPrice) {
    navPrice.innerHTML = translations[lang].navPrice;
}

const navContact = document.getElementById("nav-contact");
if (navContact) {
    navContact.innerHTML = translations[lang].navContact;
}

    document.getElementById("language-text").innerHTML =
        translations[lang].language;

    document.getElementById("languageMenu").style.display = "none";
    document.getElementById("fleet-title").innerHTML =
    translations[lang].fleetTitle;

document.getElementById("fleet-subtitle").innerHTML =
    translations[lang].fleetSubtitle;
    document.getElementById("price-title").innerHTML =
    translations[lang].priceTitle;

document.getElementById("price-subtitle").innerHTML =
    translations[lang].priceSubtitle;
    document.getElementById("limo-seats").innerHTML = "👥 " + translations[lang].limoSeats;
document.getElementById("limo-1").innerHTML = translations[lang].limo1;
document.getElementById("limo-2").innerHTML = translations[lang].limo2;
document.getElementById("limo-3").innerHTML = translations[lang].limo3;

document.getElementById("vf6-seats").innerHTML = "👥 " + translations[lang].vf6Seats;
document.getElementById("vf6-1").innerHTML = translations[lang].vf61;
document.getElementById("vf6-2").innerHTML = translations[lang].vf62;
document.getElementById("vf6-3").innerHTML = translations[lang].vf63;

document.getElementById("vf5-seats").innerHTML = "👥 " + translations[lang].vf5Seats;
document.getElementById("vf5-1").innerHTML = translations[lang].vf51;
document.getElementById("vf5-2").innerHTML = translations[lang].vf52;
document.getElementById("vf5-3").innerHTML = translations[lang].vf53;

document.getElementById("vf34-seats").innerHTML = "👥 " + translations[lang].vf34Seats;
document.getElementById("vf34-1").innerHTML = translations[lang].vf341;
document.getElementById("vf34-2").innerHTML = translations[lang].vf342;
document.getElementById("vf34-3").innerHTML = translations[lang].vf343;

// Đổi text 4 nút BOOK NOW
document.querySelectorAll(".fleet-book").forEach(btn => {
    btn.innerHTML = translations[lang].bookFleet;
});

// WHY CHOOSE US
document.getElementById("why-title").innerHTML = translations[lang].whyTitle;

document.getElementById("feature1-title").innerHTML = translations[lang].feature1Title;
document.getElementById("feature1-text").innerHTML = translations[lang].feature1Text;

document.getElementById("feature2-title").innerHTML = translations[lang].feature2Title;
document.getElementById("feature2-text").innerHTML = translations[lang].feature2Text;

document.getElementById("feature3-title").innerHTML = translations[lang].feature3Title;
document.getElementById("feature3-text").innerHTML = translations[lang].feature3Text;

document.getElementById("feature4-title").innerHTML = translations[lang].feature4Title;
document.getElementById("feature4-text").innerHTML = translations[lang].feature4Text;

document.getElementById("feature5-title").innerHTML = translations[lang].feature5Title;
document.getElementById("feature5-text").innerHTML = translations[lang].feature5Text;

document.getElementById("feature6-title").innerHTML = translations[lang].feature6Title;
document.getElementById("feature6-text").innerHTML = translations[lang].feature6Text;

// REVIEW
document.getElementById("review-title").innerHTML = translations[lang].reviewTitle;
document.getElementById("review1").innerHTML = translations[lang].review1;
document.getElementById("review2").innerHTML = translations[lang].review2;
document.getElementById("review3").innerHTML = translations[lang].review3;
document.getElementById("review4").innerHTML = translations[lang].review4;
document.getElementById("review5").innerHTML = translations[lang].review5;
document.getElementById("review6").innerHTML = translations[lang].review6;
// CONTACT
document.getElementById("contact-title").innerHTML =
    translations[lang].contactTitle;

document.getElementById("contact-subtitle").innerHTML =
    translations[lang].contactSubtitle;

document.getElementById("contact-line-id").innerHTML =
    translations[lang].contactLineId;

document.querySelectorAll(".contact-btn").forEach(btn => {
    btn.innerHTML = translations[lang].scanQR;
    });
     // ===== Mobile Menu =====

    const mNavHome = document.getElementById("m-nav-home-text");
    if (mNavHome) {
        mNavHome.innerHTML = translations[lang].navHome;
    }

    const mNavCars = document.getElementById("m-nav-cars-text");
    if (mNavCars) {
        mNavCars.innerHTML = translations[lang].navCars;
    }

    const mNavPrice = document.getElementById("m-nav-price-text");
    if (mNavPrice) {
        mNavPrice.innerHTML = translations[lang].navPrice;
    }

    const mNavReview = document.getElementById("m-nav-review-text");
    if (mNavReview) {
        mNavReview.innerHTML = translations[lang].reviewMenu;
    }

    const mNavContact = document.getElementById("m-nav-contact-text");
    if (mNavContact) {
        mNavContact.innerHTML = translations[lang].navContact;
    }

}

