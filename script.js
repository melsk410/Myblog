// Menu du site
const menuButton = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

menuButton.addEventListener("click", function () {
    navigation.classList.toggle("active");

    menuButton.textContent =
        navigation.classList.contains("active") ? "✕" : "☰";
});

// Fermer le menu après un clic
document.querySelectorAll("nav a").forEach(function(link) {
    link.addEventListener("click", function() {
        navigation.classList.remove("active");
        menuButton.textContent = "☰";
    });
});

// Année automatique
document.getElementById("year").textContent =
    new Date().getFullYear();