var banner = document.getElementById("banner-cookies");

function ocultarBanner() {
    banner.style.display = "none";
}

if (localStorage.getItem("cookiesAceptadas") === "si" ||
    localStorage.getItem("cookiesRechazadas") === "si" ||
    localStorage.getItem("cookiesConfiguradas") === "si") {
    ocultarBanner();
}

document.getElementById("aceptar-cookies").onclick = function () {
    localStorage.setItem("cookiesAceptadas", "si");
    localStorage.removeItem("cookiesRechazadas");
    localStorage.removeItem("cookiesConfiguradas");
    ocultarBanner();
};

document.getElementById("rechazar-cookies").onclick = function () {
    localStorage.setItem("cookiesRechazadas", "si");
    localStorage.removeItem("cookiesAceptadas");
    localStorage.removeItem("cookiesConfiguradas");
    ocultarBanner();
};

document.getElementById("configurar-cookies").onclick = function () {
    ocultarBanner();
    document.getElementById("cookies-analiticas").scrollIntoView();
};

document.getElementById("guardar-cookies").onclick = function () {
    localStorage.setItem("cookiesAnaliticas",
        document.getElementById("cookies-analiticas").checked);
    localStorage.setItem("cookiesPublicidad",
        document.getElementById("cookies-publicidad").checked);
    localStorage.setItem("cookiesConfiguradas", "si");
    ocultarBanner();
};
