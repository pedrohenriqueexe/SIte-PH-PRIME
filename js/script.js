const botaoMenu =
    document.getElementById("menu-mobile");

const navegacao =
    document.getElementById("nav");

const linksMenu =
    document.querySelectorAll(".nav-link");


botaoMenu.addEventListener("click", () => {

    navegacao.classList.toggle("aberto");


    const menuAberto =
        navegacao.classList.contains("aberto");


    botaoMenu.setAttribute(
        "aria-expanded",
        menuAberto
    );

});


linksMenu.forEach((link) => {

    link.addEventListener("click", () => {

        navegacao.classList.remove("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


window.addEventListener("resize", () => {

    if (window.innerWidth > 850) {

        navegacao.classList.remove("aberto");

        botaoMenu.setAttribute(
            "aria-expanded",
            "false"
        );

    }

});