var banner = document.getElementById("banner-cookies");

function ocultarBanner() {
    banner.style.display = "none";
}

if (localStorage.getItem("cookiesAceptadas") === "si" ||
    localStorage.getItem("cookiesRechazadas") === "si") {
    ocultarBanner();
}

document.getElementById("aceptar-cookies").onclick = function () {
    localStorage.setItem("cookiesAceptadas", "si");
    localStorage.removeItem("cookiesRechazadas");
    ocultarBanner();
};

document.getElementById("rechazar-cookies").onclick = function () {
    localStorage.setItem("cookiesRechazadas", "si");
    localStorage.removeItem("cookiesAceptadas");
    ocultarBanner();
};

document.getElementById("configurar-cookies").onclick = function () {
    document.getElementById("cookies-analiticas").focus();
    document.getElementById("cookies-analiticas").scrollIntoView();
};

document.getElementById("guardar-cookies").onclick = function () {
    localStorage.setItem("cookiesConfiguradas", "si");
    ocultarBanner();
};
