const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header?.classList.add("scrolled");
    } else {
        header?.classList.remove("scrolled");
    }
});

const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

menu?.addEventListener("click", () => {
    nav.classList.toggle("open");
});

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.12 }
);

reveals.forEach(item => observer.observe(item));

const form = document.querySelector("#booking-form");

form?.addEventListener("submit", event => {
    event.preventDefault();

    const message = document.querySelector("#form-message");

    if (message) {
        message.textContent =
            "Демо-форма работает. Для реального сайта здесь можно подключить Telegram, почту или сервис онлайн-записи.";
        message.style.display = "block";
    }
});
