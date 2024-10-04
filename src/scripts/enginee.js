const state = {
    // Alteram visualização
    view: {
        // Seleciono/crio uma propriedade --> query para selecionar um ou mais elementos --> passar a classe ou id
        squares: document.querySelectorAll('.square'), 
        enemy: document.querySelector('.enemy'),
        timeLeft: document.querySelector('#time-left'),
        score: document.querySelector('#score'),
    },
    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
    actions: {
        timerId: setInterval(randomSquare, 1000),
        countDownTimerId: setInterval(countDown, 1000),
    }
};

// Função para que o tempo seja decrementado
function countDown() {
    state.values.curretTime--; // Aqui eu estou decrementando o meu tempo, mas sem mostrar nada ao usuário
    state.view.timeLeft.textContent = state.values.curretTime; // Aqui eu estou lidando com meu tempo de maneira visual

    if(state.values.curretTime <= 0) {
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timerId);
        alert(`Game Over! O seu resultado foi: ${state.values.result}`);
    }
}

// Função para inseir o som
function playSound(){
    let audio = new Audio('./src/audios/hit.mp4.m4a');
    audio.volume = 0.1;
    audio.play();
}


// Função para sortear um quadrado aleatóriamente e adicionar a ele o inimido
function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove('enemy');
    })

    let randomNumber = Math.floor(Math.random() * 9); // Aqui eu estou sorteando um número aleatório entre 1 e 9
    let randomSquare = state.view.squares[randomNumber]; // Aqui eu estou pegando um quadrado aleatório, o mesmo do número aleatório que eu peguei
    randomSquare.classList.add('enemy'); // Aqui eu estou pegando o quadrado que eu sorteei e adicionando o inimigo nele, ou seja, a classe enemy
    state.values.hitPosition = randomSquare.id; // Aqui eu estou guarando qual o indice do meu enemy, ou seja, a posição em que eu posso acertar
}

// Aqui eu estou adicionando a funcionalidade de clique do mouse
function addListenerHitBox() {
    state.view.squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            if (square.id === state.values.hitPosition) {
                // Se o quadrado que o usuario clicou foi igual ao quadrado que foi sorteado para ter o iimigo
                state.values.result++ // Irei guaradar no meu result e acrescentar +1 nele
                state.view.score.textContent = state.values.result; // Aqui será alterado o visual do score, ao acresentar +1 ponto
                state.values.hitPosition = null; // Para o usuário não ficar farmando ponto no mesmo lugar, volto ele para nulo
                playSound();
            }
        })
    })
}

// Função de inicio para iniciar o jogo, cuja função principal é a de chamar as funções iniciais
function initialize() {
    addListenerHitBox();
};

initialize();