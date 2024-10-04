const state = {
    // Alteram visualização
    view: {
        // Seleciono/crio uma propriedade --> query para selecionar um ou mais elementos --> passar a classe ou id
        squares: document.querySelectorAll('.square'), 
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
    },
    values: {},
};

// Função para sortear um quadrado aleatóriamente e adicionar a ele o inimido
function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    })

    let randomNumber = Math.floor(Math.random() * 9); // Aqui eu estou sorteando um número aleatório entre 1 e 9
    let randomSquare = state.view.squares[randomNumber]; // Aqui eu estou pegando um quadrado aleatório, o mesmo do número aleatório que eu peguei
    randomSquare.classList.add('enemy'); // Aqui eu estou pegando o quadrado que eu sorteei e adicionando o inimigo nele, ou seja, a classe enemy
}

// Adicionar um evento de click dentro das caixinhas
// Nessa função eu estou percorrendo todos os quadrados e removendo a classe inimiga
function addListenerHitBox() {
    state.view.squares.forEach((square) => {})
}
// Função de inicio para iniciar o jogo, cuja função principal é a de chamar as funções iniciais
function initialize() {
    randomSquare();
};

initialize();