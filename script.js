// Dark Mode Toggle
const toggleDarkMode = document.createElement("button");
toggleDarkMode.innerText = "🌙 Dark Mode";
toggleDarkMode.style.position = "fixed";
toggleDarkMode.style.top = "10px";
toggleDarkMode.style.right = "10px";
toggleDarkMode.style.padding = "10px";
toggleDarkMode.style.cursor = "pointer";
document.body.appendChild(toggleDarkMode);

toggleDarkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        toggleDarkMode.innerText = "☀️ Light Mode";
    } else {
        toggleDarkMode.innerText = "🌙 Dark Mode";
    }
});

// Hamburger Menu
const menuButton = document.createElement("div");
menuButton.innerHTML = "☰";
menuButton.style.position = "fixed";
menuButton.style.top = "10px";
menuButton.style.left = "10px";
menuButton.style.fontSize = "24px";
menuButton.style.cursor = "pointer";
menuButton.style.display = "none"; // Ascuns pe ecrane mari
document.body.appendChild(menuButton);

const nav = document.querySelector("nav ul");
menuButton.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
});

// Responsivitate
window.addEventListener("resize", () => {
    if (window.innerWidth < 768) {
        menuButton.style.display = "block";
        nav.style.display = "none";
    } else {
        menuButton.style.display = "none";
        nav.style.display = "flex";
    }
});

// Inițializare
window.dispatchEvent(new Event("resize"));


// Formular de contact - Simulare trimitere mesaj
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Oprește trimiterea normală a formularului

    document.getElementById("form-status").innerText = "Mesaj trimis cu succes!";
    document.getElementById("form-status").style.color = "green";

    // Resetează formularul după 2 secunde
    setTimeout(() => {
        document.getElementById("contact-form").reset();
        document.getElementById("form-status").innerText = "";
    }, 2000);
});

// Efect de apariție la scroll pentru secțiuni
window.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            section.classList.add("visible");
        }
    });
});
