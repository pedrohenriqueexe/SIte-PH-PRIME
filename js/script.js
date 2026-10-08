const botaoMenu = document.getElementById("menu-mobile");
const navegacao = document.getElementById("nav");
const linksMenu = document.querySelectorAll(".nav-link");


/* ==========================================
   MENU MOBILE
========================================== */

if (botaoMenu && navegacao) {

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

}



/* ==========================================
   FAQ
========================================== */

const perguntasFaq =
    document.querySelectorAll(".faq-pergunta");


perguntasFaq.forEach((pergunta) => {

    pergunta.addEventListener("click", () => {

        const itemAtual =
            pergunta.closest(".faq-item");

        const estaAberto =
            itemAtual.classList.contains("aberto");


        document
            .querySelectorAll(".faq-item")
            .forEach((item) => {

                item.classList.remove("aberto");

                const botao =
                    item.querySelector(".faq-pergunta");

                if (botao) {

                    botao.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            });


        if (!estaAberto) {

            itemAtual.classList.add("aberto");

            pergunta.setAttribute(
                "aria-expanded",
                "true"
            );

        }

    });

});



/* ==========================================
   CONTATO - ESCOLHA
========================================== */

const botoesAtendimento =
    document.querySelectorAll(".tipo-atendimento-btn");

const fluxosContato =
    document.querySelectorAll(".contato-fluxo");


botoesAtendimento.forEach((botao) => {

    botao.addEventListener("click", () => {

        const tipo =
            botao.dataset.atendimento;


        botoesAtendimento.forEach((item) => {

            item.classList.remove("ativo");

            item.setAttribute(
                "aria-pressed",
                "false"
            );

        });


        fluxosContato.forEach((fluxo) => {

            fluxo.classList.remove("ativo");

        });


        botao.classList.add("ativo");

        botao.setAttribute(
            "aria-pressed",
            "true"
        );


        const fluxo =
            document.getElementById(
                `fluxo-${tipo}`
            );


        if (fluxo) {

            fluxo.classList.add("ativo");

        }

    });

});



/* ==========================================
   WHATSAPP
========================================== */

const NUMERO_WHATSAPP = "5581989174422";


function abrirWhatsApp(texto) {

    const mensagem =
        encodeURIComponent(texto);


    const linkWhatsApp =
        `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${mensagem}`;


    window.open(
        linkWhatsApp,
        "_blank"
    );

}



/* ==========================================
   CONTRATAÇÃO
========================================== */

const formComprar =
    document.getElementById("form-comprar");


if (formComprar) {

    formComprar.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const nome =
                document
                    .getElementById("comprar-nome")
                    .value
                    .trim();


            const aparelho =
                document
                    .getElementById("comprar-aparelho")
                    .value;


            const interesse =
                document
                    .getElementById("comprar-interesse")
                    .value;


            const mensagem =
                document
                    .getElementById("comprar-mensagem")
                    .value
                    .trim();


            let texto =
                "Olá! Vim pelo site da PH Prime e tenho interesse em contratar.";


            texto +=
                `\n\nNome: ${nome}`;

            texto +=
                `\nAparelho: ${aparelho}`;

            texto +=
                `\nInteresse: ${interesse}`;


            if (mensagem) {

                texto +=
                    `\n\nMensagem: ${mensagem}`;

            }


            abrirWhatsApp(texto);

        }
    );

}



/* ==========================================
   SUPORTE
========================================== */

const formSuporte =
    document.getElementById("form-suporte");


if (formSuporte) {

    formSuporte.addEventListener(
        "submit",
        (event) => {

            event.preventDefault();


            const nome =
                document
                    .getElementById("suporte-nome")
                    .value
                    .trim();


            const aparelho =
                document
                    .getElementById("suporte-aparelho")
                    .value;


            const aplicativo =
                document
                    .getElementById("suporte-app")
                    .value
                    .trim();


            const problema =
                document
                    .getElementById("suporte-problema")
                    .value;


            const mensagem =
                document
                    .getElementById("suporte-mensagem")
                    .value
                    .trim();


            let texto =
                "Olá! Vim pelo site da PH Prime e preciso de suporte.";


            texto +=
                `\n\nNome: ${nome}`;

            texto +=
                `\nAparelho: ${aparelho}`;


            if (aplicativo) {

                texto +=
                    `\nAplicativo: ${aplicativo}`;

            }


            texto +=
                `\nProblema: ${problema}`;

            texto +=
                `\n\nDescrição: ${mensagem}`;


            abrirWhatsApp(texto);

        }
    );

}



/* ==========================================
   APLICATIVOS -> CONTATO
========================================== */

const parametrosUrl =
    new URLSearchParams(
        window.location.search
    );


const interesseUrl =
    parametrosUrl.get("interesse");


const selectInteresse =
    document.getElementById(
        "comprar-interesse"
    );


if (interesseUrl && selectInteresse) {

    const interesses = {

        "max-player":
            "Quero contratar o Max Player",

        "teste-max-player":
            "Quero testar o Max Player",

        "fun-player":
            "Quero contratar o Fun Player"

    };


    const interesseSelecionado =
        interesses[interesseUrl];


    if (interesseSelecionado) {

        const opcaoExistente =
            Array
                .from(selectInteresse.options)
                .find(
                    (option) =>
                        option.value ===
                        interesseSelecionado
                );


        if (!opcaoExistente) {

            const novaOpcao =
                document.createElement("option");


            novaOpcao.value =
                interesseSelecionado;


            novaOpcao.textContent =
                interesseSelecionado;


            selectInteresse.appendChild(
                novaOpcao
            );

        }


        selectInteresse.value =
            interesseSelecionado;

    }

}