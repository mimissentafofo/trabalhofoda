const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Willian Afton matou 5 crianças, oque ele deve fazer com os corpos?",
        alternativas: [
            {
                texto: "Jogar no mar.",
                afirmacao: "<b>Muito inteligente!</b> "
            },
            {
                texto: "Colocar dentro dos animatronics.",
                afirmacao: "Zero <b>inteligencia viu ein!</b>"
            }
        ]
    },
    {
        enunciado: "Após a escolha anterior, Willian Afton é interrogado pela policia, como ele deve agir?",
        alternativas: [
            {
                texto: "Age com calma e fala que vai cooperar com eles pra ver se encontra o assassino.",
                afirmacao: "Você sabe mesmo como lidar crimes... <b>(Isso é estraho)</b>."
            },
            {
                texto: "Enlouquece e sai correndo.",
                afirmacao: "Falta ver um pouco sobre <b>crimes</b>."
            }
        ]
    },
    {
        enunciado: "Willian Afton descobre que os animatronics estão amaldiçoados, oque fazer?",
        alternativas: [
            {
                texto: "Queimar.",
                afirmacao: "<b></b>"
            },
            {
                texto: "Faz nada.",
                afirmacao: "<b></b>"
            }
        ]
    },
    {
        enunciado: "Os animatronics tentam matar Willian Afton, como ele pode fugir dessa situação?",
        alternativas: [
            {
                texto: "Entrar dentro de uma roupa de coelho com travas de mola.",
                afirmacao: "Mas você não tem <b>cérebro</b>."
            },
            {
                texto: "Fugir da pizzaria.",
                afirmacao: "<b>Parabéns</b> Você pensa rápido."
            }
        ]
    },
    {
        enunciado: "Os espiritos seguem Willian Afton, oque ele faz?",
        alternativas: [
            {
                texto: "Chama o padre.",
                afirmacao: "<b>Hello World!</b> "
            },
            {
                texto: "Morre.",
                afirmacao: " <b>Hello World!</b> "
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 