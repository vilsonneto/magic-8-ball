const resultContent = document.querySelector(".result");
const numberContent = document.querySelector(".number");
const buttonPlay = document.getElementById("play-button");
const triangleContent = document.getElementById("triangle");
const textAnswer = document.querySelector("span.text-result");


buttonPlay.addEventListener('click', function() {

    if ( numberContent.classList.contains("hidden") === false ) {
        numberContent.classList.add("hidden")
        resultContent.style.backgroundColor = "#121212b8"
    }

    let answer = getRandomInt(1,20);
    tradeClass(answer)
    answerByNumber(answer)



} )

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tradeClass(num) {
    if (num >= 11) {

        if ( triangleContent.classList.contains("negative-triangle") !== false ) {

            triangleContent.classList.remove("negative-triangle")

        }

        triangleContent.classList.add("positive-triangle")

    } else if ( num <= 10 ) {

        if ( triangleContent.classList.contains("positive-triangle") !== false ) {
            triangleContent.classList.remove("positive-triangle")
        }

        triangleContent.classList.add("negative-triangle")
    }

}

function answerByNumber(num) {
    textAnswer.innerText = ""

    switch (num) {
        case 1:
            textAnswer.innerText = "Não conte com isso."
        break;

        case 2:
            textAnswer.innerText = "Minha resposta é não."
        break;

        case 3:
            textAnswer.innerText = "Minhas fontes dizem não."
        break;

        case 4:
            textAnswer.innerText = "Por favor, desista!"
        break;

        case 5:
            textAnswer.innerText = "Muito duvidoso."
        break;

        case 6:
            textAnswer.innerText = "Concentre-se e pergunte novamente."
        break;

        case 7:
            textAnswer.innerText = "Não é possível prever agora."
        break;

        case 8:
            textAnswer.innerText = "Melhor não contar agora."
        break;

        case 9:
            textAnswer.innerText = "Pergunte novamente mais tarde."
        break;

        case 10:
            textAnswer.innerText = "Resposta nebulosa, tente novamente."
        break;

        case 11:
            textAnswer.innerText = "Os sinais apontam que sim"
        break;

        case 12:
            textAnswer.innerText = "Sim"
        break;

        case 13:
            textAnswer.innerText = "Quase isso."
        break;

        case 14:
            textAnswer.innerText = "Provavelmente."
        break;

        case 15:
            textAnswer.innerText = "Ao meu ver, sim."
        break;

        case 16:
            textAnswer.innerText = "Pode confiar nisso."
        break;

        case 17:
            textAnswer.innerText = "Sim, definitivamente."
        break;

        case 18:
            textAnswer.innerText = "Sem dúvida."
        break;

        case 19:
            textAnswer.innerText = "É decididamente assim."
        break;

        case 20:
            textAnswer.innerText = "É certo."
        break;
        
    }

}

