// ===============================
// LOADING SCREEN
// ===============================

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";
    }, 1400);
});

// ===============================
// AOS ANIMATION
// ===============================

if (window.AOS) {
    AOS.init({
        duration: 1200,
        once: true,
        easing: "ease-in-out"
    });
}

// ===============================
// BUKA UNDANGAN
// ===============================

const openBtn = document.getElementById("openInvitation");
const music = document.getElementById("music");

openBtn.addEventListener("click", () => {
    const playMusic = async () => {
        try {
            await music.play();
        } catch (error) {
            console.log("Autoplay diblokir, tetapi halaman tetap bisa dibuka.");
        }
    };

    playMusic();

    document.querySelector(".hero").scrollIntoView({
        behavior: "smooth"
    });
});

// ===============================
// COUNTDOWN
// ===============================

const targetDate = new Date("October 2, 2026 08:00:00").getTime();

function countdown() {

    const now = new Date().getTime();

    const distance = targetDate - now;

    if (distance <= 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";

        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}

setInterval(countdown, 1000);

countdown();

// ===============================
// MUSIC BUTTON
// ===============================

const musicButton = document.createElement("div");

musicButton.innerHTML = `
<i class="fa-solid fa-music"></i>
`;

musicButton.style.position = "fixed";
musicButton.style.right = "20px";
musicButton.style.bottom = "20px";
musicButton.style.width = "60px";
musicButton.style.height = "60px";
musicButton.style.background = "#7a2e2e";
musicButton.style.color = "white";
musicButton.style.borderRadius = "50%";
musicButton.style.display = "flex";
musicButton.style.justifyContent = "center";
musicButton.style.alignItems = "center";
musicButton.style.cursor = "pointer";
musicButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.25)";
musicButton.style.zIndex = "9999";
musicButton.style.fontSize = "22px";

const applyFloatingButtonLayout = () => {
    const isSmallScreen = window.innerWidth <= 480;

    musicButton.style.width = isSmallScreen ? "50px" : "60px";
    musicButton.style.height = isSmallScreen ? "50px" : "60px";
    musicButton.style.right = isSmallScreen ? "14px" : "20px";
    musicButton.style.bottom = isSmallScreen ? "14px" : "20px";
    musicButton.style.fontSize = isSmallScreen ? "18px" : "22px";

    topButton.style.width = isSmallScreen ? "48px" : "55px";
    topButton.style.height = isSmallScreen ? "48px" : "55px";
    topButton.style.left = isSmallScreen ? "14px" : "20px";
    topButton.style.bottom = isSmallScreen ? "14px" : "20px";
};

document.body.appendChild(musicButton);

let playing = false;

musicButton.onclick = async () => {
    if (playing) {
        music.pause();
    } else {
        try {
            await music.play();
        } catch (error) {
            console.log("Autoplay diblokir, tetapi tombol tetap berfungsi setelah interaksi pengguna.");
        }
    }

    playing = !playing;
    musicButton.querySelector("i").className = playing ? "fa-solid fa-pause" : "fa-solid fa-music";
};

// ===============================
// HEADER FADE
// ===============================

window.addEventListener("scroll", () => {

    const cover = document.querySelector(".cover");

    let value = window.scrollY;

    cover.style.opacity = 1 - value / 800;

});

// ===============================
// PARALLAX
// ===============================

window.addEventListener("scroll", () => {

    const cover = document.querySelector(".cover");

    cover.style.backgroundPositionY =
        window.pageYOffset * 0.5 + "px";

});

// ===============================
// SWIPER GALLERY
// ===============================

if (window.Swiper) {
    new Swiper('.mySwiper', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        },
    });
}

// ===============================
// SCROLL TO TOP
// ===============================

const topButton = document.createElement("div");

topButton.innerHTML = `
<i class="fa-solid fa-arrow-up"></i>
`;

topButton.style.position = "fixed";
topButton.style.left = "20px";
topButton.style.bottom = "20px";
topButton.style.width = "55px";
topButton.style.height = "55px";
topButton.style.borderRadius = "50%";
topButton.style.background = "#d4af37";
topButton.style.display = "flex";
topButton.style.justifyContent = "center";
topButton.style.alignItems = "center";
topButton.style.cursor = "pointer";
topButton.style.color = "#fff";
topButton.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topButton.style.zIndex = "9999";

document.body.appendChild(topButton);

applyFloatingButtonLayout();
window.addEventListener("resize", applyFloatingButtonLayout);

topButton.onclick = () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};